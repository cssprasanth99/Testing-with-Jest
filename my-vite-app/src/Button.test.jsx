// Button.test.js
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

describe("Button Component", () => {
  it("renders button with children", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when button is clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click me</Button>
    );
    fireEvent.click(getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("displays fetched data on DOM", async () => {
    const { getByText } = render(
      <Button onClick={mockFetchData}>Fetch Data</Button>
    );
    fireEvent.click(getByText("Fetch Data"));
    await waitFor(() => expect(getByText("Mocked data")).toBeInTheDocument());
  });
});

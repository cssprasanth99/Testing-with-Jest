import { useState, useEffect } from "react";
import "./App.css";
import CustomButton from "./CustomButton";
import Button from "./Button.jsx";
import { add, fetchData } from "./utils.js";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const handleClick = () => {
    setCount(count + 1);
  };

  const mockFetchData = async () => {
    console.log(add(2, 3)); // Assuming `add` is a synchronous function and correctly defined
    try {
      const result = await fetchData();
      setData(result);
    } catch {
      console.log("Error occurred while fetching");
    }
  };

  console.log(data);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Button onClick={mockFetchData} children={"Fetch data"} />
      {data.map((ele, index) => (
        <div key={index}>
          <h2>Id:{ele.id}</h2>
          <h2>Title:{ele.title}</h2>
          <h2>Body:{ele.body}</h2>
        </div>
      ))}
    </>
  );
}

export default App;

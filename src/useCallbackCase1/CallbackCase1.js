import { useCallback, useState } from "react";
import Child from "./Child";

const CallbackCase1 = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("This is Old Text!");

  const returnComment = (name) => {
    return data + name;
  };
  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
};

export default CallbackCase1;

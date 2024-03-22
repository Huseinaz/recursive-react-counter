import { useState } from "react";
import "./Index.css";

const Counter = () => {
  const [count, setCount] = useState(1);

  const addChild = () => {
    setCount(count + 1);
  }

  const removeChild = () => {
    setCount(count - 1);
  }

  return (
        <li>
          {count}
          <button onClick={
            addChild
          }>+</button>
          <button onClick={
            removeChild  
          }>-</button>
        </li>
    )
}

export default Counter
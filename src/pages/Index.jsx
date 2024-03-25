import React, { useState } from "react";
import "./Index.css";

const CustomCounter = ({ counterData = { count: 1, children: [] }, onAddChild }) => {
  const [count, setCount] = useState(counterData.count);
  const [children, setChildren] = useState(counterData.children || []);

  const increment = () => {
    const newChild = { count: count + 1, children: [] };
    setCount(count + 1);
    setChildren([...children, newChild]);
    if (onAddChild) {
      onAddChild(newChild);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setChildren(children.filter((child) => child.count !== count));
    }
  };

  return (
    <div className="counter">
      <span>- 1</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {count > 1 && (
        <ul>
          {children.map((child) => (
            <li key={child.count}>
              <CustomCounter counterData={child} onAddChild={onAddChild} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomCounter;
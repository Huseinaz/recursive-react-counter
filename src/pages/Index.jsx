// import { useState } from "react";
import "./Index.css";
import Counter from "./Counter";

const Index = () => {
  // const [count, setCount] = useState(1);

  return (
    <div className="parent">
      <ul>
        <Counter />
      </ul>
    </div>
  )
}

export default Index
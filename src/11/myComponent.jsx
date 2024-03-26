import { useState } from "react";
import "./Counter.css"

export default function MyComponent_11(){
  const [count,setCount] = useState(0);
  const increment = () =>{
    // setCount(count + 1) //이렇게 쓰면 초기값에서 +1되는거라 쓰면 안됨?
    setCount(count => count + 1);
    

  }
  const decrement = () => {
    // setCount(count - 1);
    setCount(count => count - 1);
  }
  const reset = () => {
    setCount(0);
  }
  return(
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement}>Decrement</button>
      <button className="counter-button" onClick={reset}>Reset</button>
      <button className="counter-button" onClick={increment}>Increment</button>
    </div>
  );
}

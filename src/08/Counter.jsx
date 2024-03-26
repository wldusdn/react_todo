import { useState } from 'react'
import './Counter.css'

export default function Counter(){
  const [count, setCount] = useState(0)
  const plus = () => {
    setCount(count + 1)
  }
  const reset = () => {
    setCount(0)
  }
  const minus = () => {
    setCount(count - 1)
  }
  return(
    <div className='counter-container'>
    <p className='count-display'>{count}</p>
    <button className="counter-button" onClick={plus}>+</button>
    <button className="counter-button" onClick={reset}>Reset</button>
    <button className="counter-button" onClick={minus}>-</button>
    </div>
  )
}
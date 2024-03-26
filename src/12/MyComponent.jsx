import { useState } from 'react'

export default function MyComponent_12(){
  const [car, setCar] = useState({
    year:2024,
    make:"Ford",
    model:"Mustang",
  })
  function handleYearChange(e){
    setCar({...car, year:e.target.value})//같은 키값을 사용해서 앞에 거에 덮어씀
  }
  function handleMakeChange(e){
    setCar({...car, make:e.target.value})
  }
  function handleModelChange(e){
    setCar({...car, model:e.target.value})
  }
  return(
    <div>
      <p>Your Favorite car is : {car.year} {car.make} {car.model}</p>
      <input type="number" value={car.year} onChange={handleYearChange}/>
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <input type="text" value={car.model} onChange={handleModelChange} />
    </div>
  )
}
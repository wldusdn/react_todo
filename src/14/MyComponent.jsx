import { useState } from 'react'

export default function MyComponent_14(){
  const [cars, setCars] = useState([])
  const [year, setYear] = useState(new Date().getFullYear)
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")

  function handleAddCar(){
    const newCar = {
      year: year,
      make: make,
      model: model,
    }

    setCars(c=>[...c, newCar]);
    setYear(new Date().getFullYear)
    setMake("")
    setModel("")
  }

  function handleremovecar(){
    setCars(c=>c.filter((_,i) => i !== index))
  }

  function handleYearChange(e){
    setYear(e.target.value)
  }

  function handleMakeChange(e){
    setMake(e.target.value)
  }

  function handleModelChange(e){
    setModel(e.target.value)
  }

  return(
    <div>
      <h2>List of Car</h2>
      <ul>
        {cars.map((car, index)=><li key={index} onClick={()=>handleremovecar(index)}>
          {car.year} {car.make} {car.model}</li>)}
      </ul>
      <input type="number" placeholder="enter car year" value={year} onChange={handleYearChange}/>
      <input type="text" placeholder='enter car make' value={make} onChange={handleMakeChange}/>
      <input type="text" placeholer="enter car model" value={model} onChange={handleModelChange}/>
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  )
}
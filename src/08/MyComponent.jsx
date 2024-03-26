import { useState } from "react";

export default function MyComponent_08(){
  
  const [name, setName] = useState("Guest")
  const [age, setAge] = useState(0)
  const [isEmployed, setIsEmployed] = useState(false)

  const updateName = () => {
    setName("홍길동")
  }
  const updateAge = () => {
    setAge(age+1)
  }
  const updateEmployed = () => {
    setIsEmployed(!isEmployed)
  }
  return(
    <div>
      <p>Name:{name}</p>
      <button onClick={updateName}>set Name</button>
      <p>Age:{age}</p>
      <button onClick={updateAge}>Increment Age</button>
      <p>Is Employed:{isEmployed? "yes":"no"}</p>
      <button onClick={updateEmployed}>Toggle Status</button>
    </div>
  )
}
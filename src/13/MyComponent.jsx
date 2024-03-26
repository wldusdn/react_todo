import { useState } from 'react'

export default function MyComponent_13(){
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])

  function handleAddFood(){
    const newfood = document.getElementById("foodinput").value//입력받은 값을 변수에 저장
    document.getElementById("foodinput").value = ""//입력받은 후 처리했으니 지움
    setFoods(f => [...f,newfood])
  }

  function handleremoveFood(index){
    setFoods(foods.filter((_,i)=>i !== index))
  }
  return(
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index)=><li key={index} onClick={()=>handleremoveFood(index)}>{food}</li>)}
      </ul>
      <input type="text" placeholder="enter food name" id="foodinput"/>
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  )
}
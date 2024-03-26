import { useState } from 'react'
import "./ToDoList.css"

export default function ToDoList(){
  const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "walk the dog"]);
  const [newTask, setNewTask] = useState("")//새로만들어지는 todo를 저장해서 실시간으로 적히는 걸 표시해줌
  function handleInputChange(e){
    setNewTask(e.target.value);
  }
  function addTask(){
    if(newTask.trim() != ""){
      setTasks((t)=>[...t, newTask])
      setNewTask("")//추가 후 공백으로 바꿔줌
    }
  }
  function deleteTask(index){
    // setTasks(t=>t.filter((_,i)=> i !== index)) //어제 만든 방식
    const updatedTasks = tasks.filter((_,i)=>i !== index);
    setTasks(updatedTasks);
  }
  function moveTaskUp(index){
    if(index>0){
      const updatedTasks = [...tasks];//세미콜론 없으면 작동안함
      [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index){
    if(index < tasks.length-1){
      const updatedTasks = [...tasks];//세미콜론 없으면 작동안함
      [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }
  return(
    <div className='to-do-list'>
      <h1>To-Do-List</h1>
      <div>
        <input type="text" placeholder='enter a task' value={newTask} onChange={handleInputChange}/>
        <button className='add-button' onClick={addTask}>Add</button>
        <ol>
          {tasks.map((task, index)=>
          <li key={index}>
            <span className='text'>{task}</span>
            <button className='delete-button' onClick={()=>deleteTask(index)}>Delete</button>
            <button className='move-button' onClick={()=>moveTaskUp(index)}>Up👍</button>
            <button className='move-button' onClick={()=>moveTaskDown(index)}>Down👎</button>
          </li>)}
        </ol>
      </div>
    </div>
  )
}
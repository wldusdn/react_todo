export default function Button(){
  const handleClick = () => {
    console.log("up")
  }
  const handleClick2 = (name) => {
    console.log(`${name} lose`)
  }

  let count = 0
  const handleClick3 = (name) => {
    if(count<3){
      count++
      console.log(`${name} you clicked me ${count} items`)
    }else{
      console.log(`${name} stop clicking me! ${count}`)
    }
  }
  const handleClick4 = (e) => {
    console.log(e)
    e.target.textContent="❤️"
  }
  
  return(
    <>
    <button onClick={handleClick}>👍</button>
    <button onClick={()=>{handleClick2("홍길동")}}>👎</button>
    <button onClick={()=>{handleClick3("김철수")}}>{count}</button>
    <button onClick={(e)=>{handleClick4(e)}}>click</button>
    </>
  )
}
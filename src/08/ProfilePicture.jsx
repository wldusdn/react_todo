import { useState } from 'react'

export default function ProfilePicture(){
  const imgurl = "./src/assets/profile.jpg"
  let displayValue = ""
  const handleClick = () => {
    displayValue ? displayValue = "" : displayValue = "none"
    console.log(displayValue)
    document.getElementById("dis").style.display = displayValue
  }


  const [display,setDisplay] = useState("")
  const styles = {display:display}
  const handleClick2 = () => {
    setDisplay(display ? "" : "none") //렌더링까지 같이 하고 싶으면 이렇게 set함수만들어써야함
  }

  return(
    <>
    <img id="dis" src={imgurl}/>
    <button onClick={handleClick}>이미지 1</button>
    <img src={imgurl} style={styles}/>
    <button onClick={handleClick2}>이미지 2</button>
    </>
  
  )
}
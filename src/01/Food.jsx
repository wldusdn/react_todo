export default function Food(){
  //js코드 들어갈 수 있음 return에 넣으려면 {}안에 쓰기
  const food1 = "Orange"
  const food2 = "Banana"
  return(
    <ul>
      <li>{food1}</li>
      <li>{food2}</li>
      <li>{food2.toLocaleUpperCase()}</li>
    </ul>
  )
}
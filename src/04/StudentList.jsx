import Student from "./Student"

export default function StudentList(){
  return(
    <>
      <Student name="홍길동" age={23} isStudent={true}/>
      <Student age={20} isStudent={true}/>
      <Student name="박나리" age={18} isStudent={false}/>
      <Student/>
    </>
  )
}
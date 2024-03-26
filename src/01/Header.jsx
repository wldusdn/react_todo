function Header(){
  return(
    <>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <hr/>
    </> //return에 최상위 태그는 무조건 하나로 되어있어야 함(즉, 하나로 감싸야함)
  )
}

export default Header
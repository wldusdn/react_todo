import styles from './Button.module.css'

export default function Button(){
  const styles = {
    backgroundColor: "rgb(151, 220, 153)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  }
  return(
    <button style={styles}>click</button>
  )
}
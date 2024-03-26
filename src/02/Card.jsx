import './Card.css'
import profilePic from '../assets/profile.jpg' 

export default function Card(){

  return(
    <div className='card'>
      {/* <img className='card-image' src="https://via.placeholder.com/150" alt="profile image" /> */}
      <img className='card-image' src={profilePic} alt="profile-image" />
      <h2 className='card-title'>Test</h2>
      <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis, inventore dolores temporibus aperiam vitae, perferendis adipisci minus omnis ullam unde sunt soluta quaerat excepturi! Explicabo voluptate neque eos dolorem?</p>
    </div>
  )
}
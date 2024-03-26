import { useState } from 'react'

export default function MyComponent_09(){
  const [name, setName] = useState("Guest")//이렇게 수정해야 렌더링이 일어남(갱신됨)
  const [quantity,setQuantity] = useState(1);
  const [comment,setComment] = useState("");
  const [payment,setPayment] = useState("Visa");
  const [shipping,setShipping] = useState("Delivery");

  const handleNameChange = (e) => { //여기에선 event받아야함
    setName(e.target.value)
  }
  const handleQuantityChange = (e) => { //여기에선 event받아야함
    setQuantity(e.target.value)
  }
  const handleCommentChange = (e) => { //여기에선 event받아야함
    setComment(e.target.value)
  }
  const handlePaymentChange = (e) => { //여기에선 event받아야함
    setPayment(e.target.value)
  }
  const handleShippingChange = (e) => { //여기에선 event받아야함
    setShipping(e.target.value)
  }
  return(
    <>
      <input type="text" value={name} onChange={handleNameChange}/>
      <p>Name : {name}</p>

      <input type="text" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={handleCommentChange}></textarea>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Cash">Cash</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange}/>
        Pick up
      </label><br />
      <label>
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </>
  )
}
import { Divider } from '@mui/material'
import React from 'react'
import './card.css'


 const Cart = () => {
  return (
    <>
    <div className='cart_section' >
      <div className='cart_container'>
        <div className='left_cart'>
          <img src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="cart_img" />
          <div className='cart_btn'>
            <button className='cart_btn1'>Add To cart</button>
            <button className='cart_btn2'>Buy Now</button>
          </div>
        </div>
        <div className='right_cart'>
          <h3>fitness Gear</h3>
          <h4>Pigeon FAVOURITEV Kettle (1.5 L, Silver,Black)</h4>
          <Divider/>
          <p className='mrp'> M.R.P :  ₹ 1145</p>
          <p>Deal of the Day: <span style={{ color:"#812704"}}> ₹560.00 </span> </p>
          <p>Deal of the Day: <span style={{ color:"#812704"}}> ₹560 (56%) </span> </p>
          <div className='discount_box' >
            <h5>Discount :<span style={{color:"#111"}} > Extra 10% Off</span></h5>
            <h4>Free Delivary : <span style={{color:"#111",fontWeight:700}}>Oct 8 - 21</span> Details</h4>
            <p>Fatest Delivary <span style={{color:"#111",fontWeight:700}}>Tomorrow 11AM</span></p>
          </div>
          <p className='description' >About the iteam:<span style={{color:"#565959",fontSize:15,fontWeight:600,letterSpacing:"0.5px"}}> This elsctric kettlen from Pigeon will soooon become a travelers best frient a hostellic saviour and an answer to all the midnight cravings .With this handy applience, you can boil water and use it to make instant noodle,pakets soup coffe and green tea </span></p>
        </div>
      </div>
    </div>
      </>
  )
}

export default Cart

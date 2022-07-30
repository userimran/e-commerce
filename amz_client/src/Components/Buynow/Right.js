import React from 'react'

 const Right = () => {
  return (
    <div className='right_buy'>
        <img src='' alt=''/>
        <div className='cost_right'>
            <p>Your Order is Eligible for Free Deleivery.</p><br/>
            <span style={{ color:"#565959"}}>Select this option at checkout.Details</span>
            <h3>Subtotal (1 items): <span style={{fontWeight:700}}>₹ 4909.0</span></h3>
            <button className='rightbuy_btn'>Process To Buy</button>
            <div className='emi'>
                Emi Availble
            </div>
        </div>

    </div>
  )
}
export default Right
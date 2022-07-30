import { Divider } from '@mui/material'
import React from 'react'
import './buynow.css'
import Option from "./Option"
import Right from './Right'
import Subtotal from './Subtotal'


const Buynow = () => {
    return (
        <div className="buynow_section">
            <div className="buynow_container">
                <div className="left_buy">
                    <h1>Shopping Cart</h1>
                    <p>Select all items</p>
                    <span className="leftbuyprice">Price</span>
                    <Divider />
                    <div className="item_container">
                        <img src="https://images.unsplash.com/photo-1539114658890-4222fe247c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aSUyMHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="imgitem" />
                        <div className="item_details">
                            <h3>I-watch black</h3>
                            <h3>Smart Satch</h3>
                            <h3 className="diffrentprice">₹.00</h3>
                            <p className="unusuall">Usually dispatched in 8 days.</p>
                            <p>Eligible for FREE Shipping</p>
                            <Option/>
                        </div>
                        <h3 className='item_price'>₹4090.0</h3>
                    </div>
                    <Divider/>
                    <Subtotal/>
                </div>
                <Right/>
            </div>

        </div>
    )
}

export default Buynow

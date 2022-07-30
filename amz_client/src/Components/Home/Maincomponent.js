import React, { useEffect } from 'react';
import Banner from './Banner';
import './home.css'
import Slide from './Slide';
import {getproducts} from "../redux/actions/action"
import {useSelector,useDispatch} from "react-redux"

function Maincomponent() {
    const products = useSelector((state) => state.getProductsreducer.productsKey);
    console.log(products)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(products)
    },[dispatch])
    return (
        <>
            <div className='home_section' >
                <div className='banner_part'>
                    <Banner />
                </div>
                <Slide title="Deal of the day"/>
                <Slide title="Today's Deal"/>
                <Slide title="Best Seller"/>
                <Slide title="Upto 80% off" />
                
            </div>
        </>

    )
}

export default Maincomponent
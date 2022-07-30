import React, { useState } from 'react'
import './sign.css';
import amzon from "../amazon_PNG9.png";
import { NavLink } from 'react-router-dom';



 const SignIn = () => {
  const [logdata,setData] =  useState({
    email:"",
    password:""
  })
  console.log(logdata)

const adddata = (e) =>{
  const {name,value} = e.target
  setData(()=>{
    return{
      ...logdata,
      [name]:value
    }
  })
}

  return (
    <>
      <section>
        <div className='sign_container'>
        
          <div className='sign_header'>
          <img src={amzon} alt='amzon_logo' /> 
          </div>
          <div className='sign_form'>
            <form>
              <h1>Sign In</h1>
              <div form_data>
                <label htmlFor='email'>Email</label>
                <input type="text" onChange={adddata} value={logdata.email} name='email' placeholder='Enter Your Email' id='email' />
              </div>
              <div form_data>
                <label htmlFor='password'>Password</label>
                <input type="password" onChange={adddata} value={logdata.password} name='password' placeholder='At least char' id='password' />
              </div>
              <div>
                <button  className='signin_btn'>Continue</button>
              </div>
            </form>
            </div>
            <div className='create_accountInfo'>
              <p>New To Amazon</p>
               <NavLink to="/ragister"><button>Create Your Amazon Account </button></NavLink> 
            </div>
           </div>
       
      </section>
 
    </>
  )
}
export default SignIn
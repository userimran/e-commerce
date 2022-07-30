import React, { useState } from 'react'
import './sign.css'
import amzon from "../amazon_PNG9.png";
import { NavLink } from 'react-router-dom';

const SignUp = () => {

  const [user, setUser] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    confirmpassword:""
  })  
  console.log(user)
  const addUser = (e) => {
    const {name,value} = e.target
    setUser(()=>{
      return {
        ...user,
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
              <h1>Sign Up</h1>
              <div form_data>
                <label htmlFor='name'>Your Name</label>
                <input type="text"  onChange={addUser}  value={user.name}  name='name' placeholder='Enter Your Name' id='fname' />
              </div>
              <div form_data>
                <label htmlFor='email'>Email</label>
                <input type="text" name='email'onChange={addUser}  value={user.email} placeholder='Enter Your Email' id='email' />
              </div>
              <div form_data>
                <label htmlFor='phone'>Phone</label>
                <input type="number" name='phone' onChange={addUser}  value={user.phone} placeholder='Enter Your Phone' id='phone' />
              </div>
              <div form_data>
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' onChange={addUser}  value={user.password} placeholder='At least char' id='password' />
              </div>
              <div form_data>
                <label htmlFor='cpassword'>Confirm Password</label>
                <input type="password" name='cpassword' onChange={addUser}  value={user.cpassword} placeholder='Confirm your password' id='cpassword' />
              </div>
              <div>
                <button  className='signin_btn'>Continue</button>
                <div className='signin_info'>
                  <p>Already Have an account?</p>
                  <NavLink to="/login">sign In</NavLink>
                </div>
              </div>
            </form>
            </div>
          
           </div>
       
      </section>
    
    
    </>
  )
}

export default SignUp
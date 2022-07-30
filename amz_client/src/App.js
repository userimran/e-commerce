
import './App.css';
import Footer from './Components/footer/Footr';
import Navbar from './Components/Header/Navbar';
import Maincomponent from './Components/Home/Maincomponent';
import Newnav from './Components/newnavbaar/Newnav';
import Footr from './Components/footer/Footr';
import Sign_up from './Components/signup_sign/SignUp';
import  Sign_in  from './Components/signup_sign/SignIn';
import  Cart  from './Components/card/Cart';
import { Routes, Route } from "react-router-dom"
import Buynow from './Components/Buynow/Buynow';
function App() {
  return (
    <>
    
    <Navbar/>
    <Newnav/>
    <Routes>
      <Route path='/' element={<Maincomponent/>} ></Route>
      <Route path='/login' element={<Sign_in/>} ></Route>
      <Route path='/ragister' element={<Sign_up/>} ></Route>
      <Route path='/getproductsone/:id' element={<Cart/>} ></Route>
      <Route path='/buynow' element={<Buynow></Buynow>} ></Route>
    </Routes>
    <Footr/>
    </>
  );
}

export default App;

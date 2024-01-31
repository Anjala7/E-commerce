import React, { useState } from 'react'
//importing css in jsx file
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {
     //use state to indicate active class in nav button 
     const [menu,setMenu] =useState("shop")

  return (
    <div className='navbar'>
     <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
     </div>
     <ul className="nav-menu">
        {/* passing arrow function in onClick */}
        {/* <li onClick={()=>{setMenu("shop")}}>Shop <hr /></li> */}
        {/* replacing this hr with ternary operator */}
        
        {/* <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li> */}
        {/* Link routes to navbar using link */}
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
     </ul>
     <div className="nav-login-cart">
        {/* <button>Login</button> */}
        {/* add link tag to login button */}
        <Link to='/login'><button>Login</button></Link>
        {/* <img src={cart_icon} alt="" /> */}
        {/* link to cart icon */}
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">
            0
        </div>
     </div>
    </div>
  )
}

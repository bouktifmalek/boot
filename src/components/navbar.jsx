import React from 'react'
import'./navbar.css'
import logo_light from '../assets/imgo.png'
import search_icon_light from '../assets/search-w.png'
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <div className='navbar'>
        <img src={logo_light}
         alt="" className='logo' /> 

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Courses</Link></li>
        <li><Link to="/">Quiz</Link></li>
        <li><Link to="/about">Register</Link></li>
        <li><Link to="/contact">Connexion</Link></li>
        <li><Link to="/contact">Logout</Link></li>
      </ul>
    
  



        <div className='search-box'>
            <input type="text" placeholder='search' />
            <img src={search_icon_light} alt="" />
        </div>
        <div className='form'>
          <h2>Login Here</h2>
          <input type='email' name='email' placeholder='Enter Email Here'></input>
          <input type='password' name='' placeholder='Enter Password Here'></input>
          <button className='btnn'><a href='#'>Login</a></button>
          <p className='link'>Don't have accont<br />
          <a href='#'>Sign Up </a>Here</p> 
          <p className='liw'>Log in with</p>
        </div>
        
        
    </div>
  )
}

export default Navbar
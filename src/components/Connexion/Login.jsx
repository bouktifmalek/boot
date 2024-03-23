import React from 'react';
import './login.css';
import person from '../../assets/person.png';
import email from '../../assets/email.png';
import password from '../../assets/password.png';

const Login = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={person} alt="" />
                <input type="text" placeholder="Username" />
            </div>
             <div className='input'>
                <img src={email} alt="" />
                <input type="email" placeholder="Email" />
            </div>
             <div className='input'>
                <img src={password} alt="" />
                <input type="password" placeholder="Password" />
            </div>
        </div>
    </div>
  );
}

export default Login;

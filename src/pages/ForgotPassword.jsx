import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png"

const ForgotPassword = () => {
  return (
    <div className="credentialsContainer">
      <div className='credentialsSubContainer'>
          <div className="forget-password form">
              <div className="image">
                <img src={Logo} alt="" />
              </div>
              <div className='header'>Forgot your password?</div>
              <form action="#">
                  <input type="password" placeholder="Enter your new Password" name='email'/>
                  <input type="password" placeholder="Confirm your Password" name='password'/>
                  <Link to="/login">
                    <input type="button" className="button" value="Submit" />
                  </Link>
              </form>
          </div>
      </div>
    </div>
  )
}

export default ForgotPassword;

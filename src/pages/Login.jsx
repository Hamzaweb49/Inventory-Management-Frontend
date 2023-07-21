import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Logo from "../assets/logo.png"

const Login = () => {

  const [values, setValues] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8000/login", values)
    .then(res => {
        if(res.data.Status === "Success"){
            navigate("/")
        } else{
            alert(res.data.Error)
        }
    })
    .then(err => console.log(err))
  }  

  return (
    <div className="credentialsContainer">
      <div className='credentialsSubContainer'>
          <div className="login form">
              <div className="image">
                <img src={Logo} alt="" />
              </div>
              <div className='header'>Login Now</div>
              <form action="#">
                  <input type="text" placeholder="Enter your Email" name='email'/>
                  <input type="password" placeholder="Enter your Password" name='password'/>
                  <Link to="/forgot-password">Forgot Password</Link>
                  <input type="button" className="button" value="Login" />
              </form>
              <div className="signup">
                  <span className="signup">Don't have an account?
                  <Link to="/register">
                  <label for="check">Register Here</label>
                  </Link>
                  </span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Login

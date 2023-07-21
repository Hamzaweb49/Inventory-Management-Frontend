import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import Login from './Login';
import Logo from "../assets/logo.png"

const Register = () => {
  
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  })

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8000/api/register", values)
    .then(res => {
        if(res.data.Status === "Success"){
            navigate("/login")
        } else{
            alert("Error while Registration")
        }
    })
    .then(err => console.log(err))
  }

  return (
    <div className="credentialsContainer">
      <div className='credentialsSubContainer'>
          <div className="registration form">
              <div className="image">
                <img src={Logo} alt="" />
              </div>
              <div className='header'>Create an account</div>
              <form action="#">
                  <input type="text" placeholder="Enter your Name" name="name" />
                  <input type="email" placeholder="Enter your Email" name='email' />
                  <input type="password" placeholder="Create your Password" name='password' />
                  <input type="button" className="button" value="Register" />
              </form>
              <div className="signup">
                  <span className="signup">Already have an account?
                  <Link to="/login">
                  <label>Login</label>
                  </Link>
                  </span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Register

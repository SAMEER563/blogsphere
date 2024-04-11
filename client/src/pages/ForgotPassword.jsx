import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'


import {UserContext} from '../context/userContext.js'

const ForgotPassword = () => {
  const [userData, setuserData] = useState({
  
    email: "",

   
  });
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const {setCurrentUser} = useContext(UserContext)

  const changeInputHandler = (e) => {
    setuserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };


  const loginUser = async(e) => {
    e.preventDefault();
    setError('')
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/forgot-password`, userData);
      const user = await response.data;
      setCurrentUser(user)
      navigate('/')
    } catch (err) {
      setError(err.response.data.message)
    }
  }


  return (
    <section className="login">
      <div className="container">
        <h2> Forgot Password </h2>
        <form className="form login__form" onSubmit={loginUser}>
          {error && <p className="form__error-message">{error}</p>}
          
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
            autoFocus
          />
         
          <button type="submit" className='btn primary'>Send</button>
        </form>
      
      </div>
    </section>
  );
};

export default ForgotPassword;

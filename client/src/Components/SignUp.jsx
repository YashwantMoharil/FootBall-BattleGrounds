import React, { useState } from 'react'
import axios from "axios"
import Cookies from "universal-cookie"
import infoIcon from "../Assets/Images/informationIcon.png"


function Signup({ setIsAuth }) {
  const cookies = new Cookies();
  const [user, setUser] = useState(null)
  const signUpUser = () => {
    axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/signup`, user).then(res => {
      const { token, userId, firstName, lastName, userName, hashedPassword } = res.data;

      cookies.set("token", token);
      cookies.set("userId", userId);
      cookies.set("firstName", firstName);
      cookies.set("lastName", lastName);
      cookies.set("userName", userName);
      cookies.set("hashedPassword", hashedPassword);
      setIsAuth(true);
    })

  }
  return (
    <>
      <div className='auth-container '>
        <img className='infoIcon2' src={infoIcon} title="The backend is hosted on free servers, so Login/Signup takes ~15s on first use." />
        <label>SignUp</label>
        <input placeholder='First Name' onChange={(event) => { setUser({ ...user, firstName: event.target.value }) }} />
        <input placeholder='Last Name' onChange={(event) => { setUser({ ...user, lastName: event.target.value }) }} />
        <input placeholder='Username' onChange={(event) => { setUser({ ...user, userName: event.target.value }) }} />
        <input placeholder='Password' onChange={(event) => { setUser({ ...user, passWord: event.target.value }) }} />
        <button onClick={signUpUser}>Sign Up</button>
      </div>
    </>

  )
}

export default Signup
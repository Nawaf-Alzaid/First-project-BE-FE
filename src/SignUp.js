import'./SignUp.css'

import user_icon from './Assets/person.png'
import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'
import { useState } from 'react'
import axios from "axios";
import useAuth from "./useAuth";
import api from "./api";
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


export default function SignUp(){
   const navigate = useNavigate();
   const [info , setLoanInput]= useState({
  

      name:'',
      email:'',
      password:'',
   })
   
   function ButtonHandling() {
    api
      .post("/register", {
        name: info.name,
        email: info.email,
        password: info.password,
      })
      .then((res) => {
        var subToken = res.data.token.substring(3);
        localStorage.setItem("authToken", subToken);
        navigate("/Home");
        window.location.reload();
      })
      .catch((error) => {
        Swal.fire({
     title: 'Error!',
     icon: 'error',
     text: error.response.data.message,

      });
    });
  }
  
  
    return (
      <div className='container'>
        <div className="header">
         <div className="text">Sign Up</div>
        <div className="underline"></div>
        </div>
        <div className="inputs">
        <div className="input">
         <img src={user_icon} alt="" />
         <input type="text"placeholder='Name'
           onChange={(event) => {
            setLoanInput({ ...info, name: event.target.value })}}/>
            </div> 
            <div className="input">
         <img src={email_icon} alt="" />
         <input type="email"placeholder='Email'
           onChange={(event) => {
            setLoanInput({ ...info, email: event.target.value })}}/>
            </div>  
            <div className="input">
         <img src= {password_icon} alt="" />
         <input type="password"placeholder='Password'
           onChange={(event) => {
            setLoanInput({ ...info, password: event.target.value })}}/>
            </div>  
            
            <div className='submit-container'>
               <div onClick ={()=>ButtonHandling()} className='submit'> <h1>submit</h1>
                  </div>  
        </div>
      </div>
      </div>
      
      

    )
   }
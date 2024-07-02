import './login.css'
import user_icon from './Assets/person.png'
import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import Password from './Password'
import api from "./api";
import axios from "axios";
import Swal from 'sweetalert2'


export default function LogIn(){
   const navigate = useNavigate();
   const [info , setLoanInput]= useState({

      email:'',
      password:'',
   })

   function ButtonHandling() {
      api
        .post("/login", {
         
          email: info.email,
          password: info.password,
        })
        .then((res) => {
          var subToken = res.data.token.substring(3);
          localStorage.setItem("authToken", subToken);
          navigate("/Home");
          window.location.reload();

        })
        .catch(function (error) {
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
         <div className="text">Login</div>
        <div className="underline"></div>
        </div>
        <div className="inputs">
        
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
                     setLoanInput({ ...info, password: event.target.value })}}
         />
            </div>  
            <div className="forgot-password"> Lost Password?
               <Link to= "/Password">Click Here!</Link>
            </div>
            {/* <div className='submit-container'>
               <div className='submit'> <h1>submit</h1>
                  </div>  
        </div> */}
        <div className='submit-container'>
        <div className={"Login"?"submit gray":"submit"}onClick={()=>{ navigate("/SignUp")}}><h2>Sign Up</h2></div>
        <div onClick ={()=>ButtonHandling()} className="submit"> <h2>Submit</h2></div>
        </div>

      </div>
      </div>
            

    )
   }



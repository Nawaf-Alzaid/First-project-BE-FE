import './Password.css'
import password_icon from './Assets/password.png'
import useAuth from "./useAuth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";
import Swal from 'sweetalert2'



//  export default function Password(){
   export default function Password({ props }) {
      const token = useAuth();
    
      const navigate = useNavigate();
      const [info, setLoanInput] = useState({
        oldPass: "",
        newPass: "",
        newPass2: "",
      });
    
      const isAble =
        info.oldPass === "" ||
        info.newPass === "" ||
        info.newPass2 === "" ||
        info.newPass2 !== info.newPass;
    
      function ButtonHandlingT() {
        api
          .post("/changePassword", {
            old_password: info.oldPass,
            new_password: info.newPass,
            new_password_confirmation: info.newPass,
          })
          .then((res) => {
          
            navigate("/Home");
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
         <div className="text">Update Password</div>
        <div className="underline"></div>
        </div>
        <div className="inputs">
      
            <div className="input">
         <img src={password_icon} alt="" />
         <input type="password"placeholder='old password'
         onChange={(event) => {
            setLoanInput({ ...info, oldPass: event.target.value })}}/>
            </div>  
            <div className="input">
         <img src= {password_icon} alt="" />
         <input type="password"placeholder='Your New Password'
         onChange={(event) => {
          setLoanInput({ ...info, newPass: event.target.value })}}/>
            </div>  
            <div className="input">
         <img src= {password_icon} alt="" />
         <input type="password"placeholder='Confirm Your Password'
         onChange={(event) => {
            setLoanInput({ ...info, newPass2: event.target.value })}}/>
            </div>  

            <div className='submit-container'>
               <div onClick={() => ButtonHandlingT()} className= 'submit'> <h1>submit</h1>
                  </div>    
        </div>
      </div>
      </div>
     )
    }
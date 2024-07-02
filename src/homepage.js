import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { colors } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import api from "./api";
import useAuth from "./useAuth";
import { useState,useEffect } from 'react';
import user_icon from './Assets/person.png'
import email_icon from './Assets/email.png'
import  './home.css'

export default function ButtonAppBar() {
    const navigate = useNavigate();

    const token = useAuth();
  const [userInfo, setUserInfo] = useState({
    name:"",
    email: ""
  });


  useEffect(() => {
    if (token) {
      api
        .get("/userInfo")
        .then((res) => {
          setUserInfo(res.data);
        })
        .catch(function (error) {
 
        });
    }
  }, [token]);


 


          return ( 
            
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{background:'#27485d'}} position="static">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={()=>{navigate("/Password")}}>
            Edit Password
          </Button>
        <Button color="inherit" onClick={()=>{
          localStorage.removeItem("authToken");
          navigate("/LogIn")}}> Logout</Button>
        </Toolbar>
      </AppBar>
      <div className='container'>

   <div className="text">User info</div>
 
  </div>
  <div className="inputs">
  <div className="input">
    
   <img src={user_icon} alt="" />
   <h2>{userInfo.name} </h2>
      </div> 
      <div className="input">

   <img src={email_icon} alt="" />
   <h2>{userInfo.email}</h2>
      </div>
      </div>
   
    </Box>
  );
}

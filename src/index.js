import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './SignUp';
import LogIn from './LogIn'
import Password from './Password';
import ButtonAppBar from './homepage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    index: true,
    element: <LogIn></LogIn>,
  },
  {  path: "/LogIn",
  element: <LogIn></LogIn>
},
{  path: "/SignUp",
    element: <SignUp></SignUp>,
},
{
  path: "/Password",
  element: <Password></Password>,
},
{
  path: "/Home",
  element: <ButtonAppBar></ButtonAppBar>,
},
]); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


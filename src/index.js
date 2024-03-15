import React from 'react';
import ReactDOM from 'react-dom/client';
import './Register.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Updateprofile from './Updateprofile';
import Blog from './Blog';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogPage from './BlogPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

  <BrowserRouter>
  <Routes>
  <Route path='/' element={<BlogPage/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/updateProfile/:id' element={<Updateprofile/>}/>
    <Route path='/Blog' element={<Blog/>}/>

    
    

    {/* </Route> */}

  </Routes>


  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  
const [data,setdata]=useState('')
const navigate=useNavigate()

let handleChange=(e)=>{
  setdata({...data,[e.target.name]:e.target.value})
}

let handleSubmit= async(e)=>{
  e.preventDefault()

try{

  let response=await axios.post('http://localhost:4000/login',data)
  console.log(response);
  if(response.data){
    localStorage.setItem('userId',response.data.id)
    localStorage.setItem('token',response.data.token)
    
    toast(`welcome ${response.data.Username}`)
    navigate('/profile')
    
      }
}
catch(err){
  console.error(err);
  toast.warn(err.response.data.message)

}
}
  return (
    <div className='bg '>

      <div className='text'>
      <p>Login</p>
      </div>

      <form onSubmit={handleSubmit}>

        <div className='inputs'>

<div  className='input  form-control ' >
<input  onChange={handleChange} type="Username" name='Username' placeholder='Username' />
</div>

<div className='input  form-control '>
<input onChange={handleChange} type="password" name='Password' placeholder='password' />
</div>

    <div className='text-center '>
      <button  className='button'>signin</button>
    </div>


<div className='caa'>
 <p>Create an account? <span className='reg'><a href="/">Register</a></span></p>
</div>

        </div>

       


       
      </form> <ToastContainer/>

      
    </div>
  )
}

export default Login

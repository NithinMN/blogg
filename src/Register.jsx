import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {

    const [data,setdata]=useState('')
    const navigate=useNavigate()


let handleChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})

}
console.log(data);

let handleSubmit=async (e)=>{
    e.preventDefault()
   

    try{
   let response= await axios.post('http://localhost:4000/insert',data)
   console.log(response,'response');
   toast('added succesfully')
   navigate('/login')

    }
    catch(err){
        console.log(err);
        toast(err.response.data.message || err.response.data)
    }
  
}
  return (

    
    <div>
        
        <form onSubmit={handleSubmit}>

        
<div className='container '>

            <div className='header w0'>

            <h2 className='text-secondary fs-1  fw-bold '>signup</h2>

                

                <div className='inputs'>

               

                    <div className='input form-control '>
                       <input  onChange={handleChange} type="text" name='Name' placeholder='Name ' />
                    </div>

                    <div className='input form-control '>
                       <input  onChange={handleChange} type="text" name='Username' placeholder='Username ' />
                    </div>
                    

                    <div className='input form-control '>
                      <input  onChange={handleChange} type="Email" name='Email' placeholder='Email' />
                    </div>

                    <div className='input form-control '>
                     <input  onChange={handleChange} type="password" name='Password' placeholder='password'/>
                    </div>

                   

                </div>

                
                 <button className='submit' ><a href="login"></a> signup</button>
                 

            <p >Do you have an account?<span className='sign'><a href="/login">Login</a></span></p>

            </div>
</div>
        <ToastContainer/>
        </form>
      
    </div>
  )
}

export default Register


import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Updateprofile = () => {

    let {id}=useParams()

    const[data,setdata]=useState('')
    const navigate=useNavigate()

    let handleChange=(e)=>{

        setdata({...data,[e.target.name]:e.target.value})
    }

    let handleUpdate= async(e)=>{
        e.preventDefault()

        try{

            let response=await axios.put(`http://localhost:4000/update/${id}`,data)
            console.log(response);
            if(response.data){
                alert('details updated')
                navigate('/Profile')
            }
            
        }
        catch(err){
            console.log(err.response.data.message);
            alert(err.response.data.message)

        }
     }

  return (
    <div>
        <form onSubmit={handleUpdate} className='w-50 m-auto mt-5 bg-white p-3 rounded-2 '>
        <input className='form-control  w-50  m-auto mb-2 border-2' onChange={handleChange} type="text" name='Name' placeholder='name'/>
        <input className='form-control  w-50  m-auto mb-2 border-2' onChange={handleChange} type="text" name='Username' placeholder='username'/>
        <input className='form-control  w-50 m-auto mb-2 border-2' onChange={handleChange} type="text" name='Email' placeholder='email' />
        <input className='form-control  w-25 m-auto mb-2 bg-secondary ' onChange={handleChange} type="submit"  value='update' />
        </form>
      
    </div>
  )
}

export default Updateprofile

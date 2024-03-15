import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './blog.css';
import { ToastContainer, toast } from 'react-toastify';
import { logDOM } from '@testing-library/react';




const Blog = () => {

  const[data,setdata]=useState('')
  const[newdata,setnewdata]=useState([''])
  const[refresh,setrefresh]=useState(false)

  let handleChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }

  let handleSubmit=async(e)=>{
    e.preventDefault()

    try{
      let response= await axios.post('http://localhost:4000/insertBlog',data)
      console.log(response,'blog response');
      if(response.data){
        toast('Blog added succesfully')
        setrefresh(!refresh)
        e.target.reset()
      }

  }
  catch(err){
    console.log(err);
    toast.warn(err.response.data)
    }
}

useEffect(()=>{
   

  let fetchdata= async()=>{
        let response=await axios.get(`http://localhost:4000/findblog`)
    console.log(response);
    setnewdata(response.data)
  }
  fetchdata()


},[refresh])

console.log();

let handleDelete= async (id)=>{

  try{
    console.log('ubasddfs');
    let response=await axios.delete(`http://localhost:4000/delete/${id}`)
    console.log(response);
    setrefresh(!refresh)

  }
  catch (err){
      console.log(err);
      toast.warn(err.response.data)
  }

}

  



return (




  
  
    <div>

        <div className='m-auto w-50  bg-white p-3 rounded-2   mt-5  text-center '>
      <form onSubmit={handleSubmit}>

        <input onChange={handleChange} type="text" name='title' placeholder='title' className='w-50' /><br />
        <textarea onChange={handleChange} type="text" name='content' placeholder='Content' className='w-50'/><br />
        <input  type="submit" value='ADD' className='bg-secondary border-0 rounded-2 p-1 py-2 w-25 '/>
        <ToastContainer />
      </form>
        </div>    
  

      <div>
      <div className='row row-cols-1 row-cols-md-4 gap-1 justify-content-center mt-5  '>
  {newdata.map((item) => (
    <div key={item._id} className='col mb-4'>
      <div class="card h-100 text-center ">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text flex-grow-1">{item.content}</p>
          <div><button onClick={() => handleDelete(item._id)} class="btn btn-primary mt-auto w-50 text-center ">Delete</button></div>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
      


      
    </div>
  )
}

export default Blog

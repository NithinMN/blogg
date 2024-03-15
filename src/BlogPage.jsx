import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BlogPage = () => {
    const[newdata,setnewdata]=useState([''])
    const[refresh,setrefresh]=useState(false)

    useEffect(()=>{
        let fetchdata= async()=>{
            let response=await axios.get(`http://localhost:4000/findblog`)
        console.log(response);
        setnewdata(response.data)
      }
      fetchdata()
    
    },[refresh])
  return (
    <div>
      <div className='text-center mt-2 '><h1>Blogs</h1></div>  
      <div className='row row-cols-1 row-cols-md-4 gap-1 justify-content-center mt-5  '>
  {newdata.map((item) => (
    <div key={item._id} className='col mb-4'>
      <div class="card h-100 text-center ">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text flex-grow-1">{item.content}</p>
        </div>
      </div>
    </div>
  ))}
</div>
<div className='d-flex justify-content-center align-content-center '><a href="/Register"><button className='border-0 h-100  w-100'>Add Blog</button></a></div>
    </div>
  )
}

export default BlogPage

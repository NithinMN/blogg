import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Profile.css';


const Profile =() => {

  const[profile,setProfile]=useState([''])
  const navigate=useNavigate()

  let userId=localStorage.getItem('userId')
  let token=localStorage.getItem('token')

  

  useEffect(()=>{
   console.log('start');
try{

  if(!token){
   return navigate('/login')
  }

  let fetchdata= async()=>{
    console.log(userId);
    let response=await axios.get(`http://localhost:4000/findProfile/${userId}`,{
      headers:{
        Authorization:token
      }
    })
    console.log(response);
    setProfile(response.data)
  }
  fetchdata()
}
catch(err){
  console.log(err);

}


  },[])

  let handlelogout=()=>{
    console.log('jhjhjjhjjhhj');
    localStorage.removeItem('token');
    localStorage.removeItem('userId')
    navigate('/login')
  }
 

//  console.log(profile);

 
  
  return (
    <div className='bg'>
      <h1>Profile</h1>
      <p>Name: <span className='tsize'>{profile.Name}</span></p>
      <p>Username: <span className='tsize'>{profile.Username}</span></p>
      <p>Email:<span className='tsize'> {profile.Email}</span></p>
      
      

      <Link to={`/updateProfile/${profile._id}`}><button className='bg-secondary border-0 rounded-1 p-1 px-2'>Update</button></Link><br /><br />

     <Link to={`/blog`}> <button className='bg-primary border-0 rounded-1 p-1 px-2'>Create blog</button></Link><br /><br />

     <button className='bg-danger border-0 rounded-1 p-1 px-2' onClick={handlelogout}>Logout</button>
     

      

      
      
      
    </div>
  )
}

export default  Profile 

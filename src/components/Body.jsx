import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Login from './Login'
import Profile from './Profile'
import Footer from './Footer'
import Feed from './Feed'
import { base_URL } from '../utils/constant'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Body = () => {
  const dispatch=useDispatch();
  const userData=useSelector((store)=>store.user);
  const navigate=useNavigate();
  const fetchUser=async()=>{
    try {
      const res=await axios.get(base_URL+"profile/view",{withCredentials:true});
      dispatch(addUser(res.data))
      
    } catch (error) {
      if(error.status===401){
        navigate("/login")
      }
      console.log(error.message);
    }
  }

  useEffect(()=>{
    if(!userData){
      fetchUser();
    }
  },[])
  return (
    <>
    <NavBar></NavBar>
    <Outlet>
      <Feed></Feed>
      <Login></Login>
      <Profile></Profile>
    </Outlet>
    <Footer></Footer>
    </>
  )
}

export default Body
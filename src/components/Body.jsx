import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Login from './Login'
import Profile from './Profile'
import Footer from './Footer'
import Feed from './Feed'

const Body = () => {
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
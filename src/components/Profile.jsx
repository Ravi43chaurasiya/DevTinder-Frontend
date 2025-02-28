import React, { useState } from 'react'
import EditProfile from './EditProfile'
import RequestCard from './RequestCard'
import { useSelector } from 'react-redux';
// import User from './User';

const Profile = () => {
  const profileUser=useSelector((store)=>store.user);
 

  return (
    profileUser && (
    <div>
      <EditProfile user={profileUser}></EditProfile>
      {/* <User user={profileUser}></User> */}
    </div>
    )
  )
}

export default Profile
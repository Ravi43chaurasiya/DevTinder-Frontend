import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { base_URL } from '../utils/constant';
import axios from 'axios';
import { removeuser } from '../utils/userSlice';

const NavBar = () => {
const user=useSelector(store=>store.user);
const dispatch=useDispatch();
const navigate=useNavigate()
const handleLogout=async()=>{

  try {
    await axios.post(base_URL+"logout",{},{withCredentials:true})
    dispatch(removeuser());
    return navigate("/login");

    
  } catch (error) {
    // handle error
    console.log(error.message);
    
  }
}

  return (
    <div className="navbar bg-base-300">
    <div className="flex-1">
     {user && <Link to="/" className="btn btn-ghost text-xl">👩‍💻DevTinder</Link>}
     {!user && <h1 className="btn btn-ghost text-xl">👩‍💻DevTinder</h1>}
    </div>
   {user && <div className="flex-none gap-2">
    <p>welcome, {user.firstName}</p>
      <div className="dropdown dropdown-end mx-4">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ">
          
            <img
              alt="user"
              referrerPolicy="no-referrer" 
              src={user.photoUrl}/>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <Link to="/profile" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li><Link to="/connections">Connections</Link></li>
          <li><Link to="/requests">Requests</Link></li>
          <li><Link onClick={handleLogout}>Logout</Link></li>
        </ul>
      </div>
    </div>}
  </div>
  )
}

export default NavBar
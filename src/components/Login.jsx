import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { base_URL } from "../utils/constant";

const Login = () => {

  const [emailId,seEmailId]=useState("ravi8@gmail.com");
  const [password,setPassword]=useState("Ravi8@32154");
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleLogin=async()=>{
    try {
      const result=await axios.post(base_URL+"login",{
        emailId,
        password
      },{
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // ✅ Ensure credentials are included
      })
      console.log(result.data)
      dispatch(addUser(result.data));
      return navigate("/")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card card-side bg-base-200 shadow-xl max-w-md md:max-w-2xl flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <figure className="w-full md:w-1/2">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Login"
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Login Form Section */}
        <div className="card-body flex items-center w-full md:w-1/2">
          <h2 className="card-title text-center">Login</h2>
          
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email ID: {emailId}</span>
            </div>
            <input
              type="text"
              value={emailId}
              placeholder="Enter your email"
              className="input input-bordered w-full"
              onChange={(e)=>seEmailId(e.target.value)}
            />

            <div className="label">
              <span className="label-text">Password:</span>
            </div>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              className="input input-bordered w-full"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </label>

          <div className="card-actions mt-4">
            <button className="btn btn-primary w-full" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

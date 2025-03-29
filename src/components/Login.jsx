import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { base_URL } from "../utils/constant";

const Login = () => {

  const [emailId,setEmailId]=useState("");
  const [password,setPassword]=useState("");
  const [firstName,setfirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [isLoginForm,setIsLoginForm]=useState(true);
  const [error,setError]=useState("");
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
      setError(error?.response?.data || "please enter correct credentials!")
      
    }
  }

  const handleSignUp=async()=>{
    try {
      const res=await axios.post(base_URL+ "signup",
        {
          firstName,
          lastName,
          emailId,
          password
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // ✅ Ensure credentials are included
      }
    );

    dispatch(addUser(res.data.data));
    return navigate("/profile");

      
    } catch (error) {
      setError(error?.response?.data || "please enter correct credentials!")
      
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
          <h2 className="card-title text-center">{isLoginForm?"Login":"Sign Up"}</h2>
          
          <label className="form-control w-full max-w-xs">
            {!isLoginForm&&<>
          <div className="label">
              <span className="label-text">First Name: </span>
            </div>
            <input
              type="text"
              value={firstName}
              placeholder="Enter your first name."
              className="input input-bordered w-full"
              onChange={(e)=>setfirstName(e.target.value)}
            />
            </>}
            {!isLoginForm && <>
            <div className="label">
              <span className="label-text">Last Name: </span>
            </div>
            <input
              type="text"
              value={lastName}
              placeholder="Enter your email"
              className="input input-bordered w-full"
              onChange={(e)=>setLastName(e.target.value)}
            /> </>}
            <div className="label">
              <span className="label-text">Email ID: </span>
            </div>
            <input
              type="text"
              value={emailId}
              placeholder="Enter your email"
              className="input input-bordered w-full"
              onChange={(e)=>setEmailId(e.target.value)}
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
            <p className="text-red-500">{error}</p>
            <button className="btn btn-primary w-full" onClick={isLoginForm?handleLogin:handleSignUp}>{isLoginForm?"Login":"Sign Up"}</button>
          </div>
          <p className="my-1 hover:cursor-pointer text-cyan-500 hover:text-green-500" onClick={()=>setIsLoginForm(value=>!value)}>{isLoginForm?"new user? Sign up Here.":"existing user? Login Here."}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

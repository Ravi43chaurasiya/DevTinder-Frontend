import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { base_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import RequestCard from './RequestCard';

const EditProfile = ({user}) => {
  
  const [firstName,setFirstName]=useState(user?.firstName || "");
  const [lastName,setLastName]=useState(user?.lastName || "");
  const [photoUrl,setPhotoUrl]=useState(user?.photoUrl || "");
  const [gender,setGender]=useState(user?.gender || "");
  const [age,setAge]=useState(user?.age || "");
  const [about,setAbout]=useState(user?.about || "");
  const [skills,setSkills]=useState(user.skills || []);
  
  const [error,setError]=useState("");
  const [showToast,setShowToast]=useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleProfileSave=async()=>{
    setError("");
    try {
      const result=await axios.patch(base_URL+"profile/edit",{
        firstName,
        lastName,
        photoUrl,
        gender,
        age,
        about,
        skills
      },{
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // ✅ Ensure credentials are included
      })
      console.log(result.data)
      dispatch(addUser(result?.data?.data));
      setShowToast(true);
      setTimeout(()=>{
          setShowToast(false);
      },3000)
      // return navigate("/")
    } catch (error) {
      setError(error?.response?.data || "please enter correct credentials!")
      console.log(error);
    }
  }


  return (
    <>
    <div className='flex flex-col sm:flex-row justify-center'>
    <div className='flex justify-center'>
       <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="card card-side bg-base-200 shadow-xl max-w-md md:max-w-2xl flex flex-col md:flex-row items-center">
      
        {/* Login Form Section */}
        <div className="card-body flex items-center w-full md:w-1/2">
          <h2 className="card-title text-center">Edit Profile</h2>
          
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">First Name: {firstName}</span>
            </div>
            <input
              type="text"
              value={firstName}
              placeholder="Enter your first name"
              className="input input-bordered w-full"
              onChange={(e)=>setFirstName(e.target.value)}
            />

            <div className="label">
              <span className="label-text">Last Name:</span>
            </div>
            <input
              type="text"
              value={lastName}
              placeholder="Enter your last name"
              className="input input-bordered w-full"
              onChange={(e)=>setLastName(e.target.value)}
            />
            <div className="label">
              <span className="label-text">Photo URL:</span>
            </div>
            <input
              type="text"
              value={photoUrl}
              placeholder="Enter a valid photo url"
              className="input input-bordered w-full"
              onChange={(e)=>setPhotoUrl(e.target.value)}
            />
            <div className="label">
              <span className="label-text">Gender:</span>
            </div>
            <input
              type="text"
              value={gender}
              placeholder="type Your Gender here"
              className="input input-bordered w-full"
              onChange={(e)=>setGender(e.target.value)}
            />
            <div className="label">
              <span className="label-text">Age:</span>
            </div>
            <input
              type="number"
              value={age}
              placeholder="Enter your age here"
              className="input input-bordered w-full"
              onChange={(e)=>setAge(e.target.value)}
            />
            <div className="label">
              <span className="label-text">About:</span>
            </div>
            <input
              type="text"
              value={about}
              placeholder="something about yourself!"
              className="input input-bordered w-full"
              onChange={(e)=>setAbout(e.target.value)}
            />
            <div className="label">
              <span className="label-text">Skills:</span>
            </div>
            <input
              type="text"
              value={skills.join(",")}// convert array to string for display
              placeholder="Enter your skills (comma seperated)"
              className="input input-bordered w-full"
              onChange={(e)=>setSkills(e.target.value.split(",").map(skill=>skill.trim()))}// convert input back to array
            />
          </label>

          <div className="card-actions mt-3"> 
            <p className="text-red-500">{error}</p>
            <button className="btn btn-primary w-full" onClick={handleProfileSave}>Save</button>
          </div>
        </div>
      </div>
      
    </div>
    
    </div>
    <RequestCard user={{firstName,lastName,photoUrl,gender,age,about,skills
    }}></RequestCard>
    </div>

   {showToast && <div className="toast toast-top toast-center">
  
  <div className="alert alert-success">
    <span>Profile saved successfully.</span>
  </div>
</div>}
    </>
  )
}

export default EditProfile
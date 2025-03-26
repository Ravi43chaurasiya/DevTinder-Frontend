import React, { useEffect } from 'react'
import { base_URL } from '../utils/constant';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addConnection } from '../utils/connectionSlice';

const Connections = () => {
  
  const dispatch=useDispatch();
  const connections=useSelector((store)=>store.connection);

  const fetchConnections= async()=>{
    try {
      const res=await axios.get(base_URL+"user/connections",{
        withCredentials:true
      })
      console.log(res?.data?.data);
      dispatch(addConnection(res?.data?.data));
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(()=>{
    fetchConnections();
  },[])

  if(!connections) return;

  if(connections.length===0) return <h1>No connection found!</h1>

  return (
    <div className=' text-center my-10'>
      <h1 className='text-3xl'>
      connections
      </h1>
      {connections.map((connection) => {
  const { firstName, lastName, photoUrl, age, gender, about, skills } = connection;

  return (
    <div 
      key={connection._id} 
      className="flex mx-auto my-4 items-center p-4 bg-white shadow-md rounded-2xl w-96 space-x-4 hover:shadow-lg transition-all"
    >
      {/* Profile Image */}
      <img 
        src={photoUrl} 
        alt="Profile" 
        className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover"
      />

      {/* User Info */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-800">{firstName} {lastName}</h2>
        <h5 className="text-lg font-semibold text-gray-800">{age} {gender}</h5>
        <p className="text-sm text-gray-600">{about || "No bio available"}</p>

        {/* Skills */}
        <div className="mt-2 flex flex-wrap gap-1">
          {skills?.length > 0 ? (
            skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full"
              >
                {skill}
              </span>
            ))
          ) : (
            <span className="text-xs text-gray-400">No skills added</span>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-3 flex justify-end space-x-2">
          <button className="px-3 py-1 text-sm font-medium bg-green-500 text-white rounded-lg hover:bg-green-600">
            Accept
          </button>
          <button className="px-3 py-1 text-sm font-medium bg-red-500 text-white rounded-lg hover:bg-red-600">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
})}

    </div>
  )
}

export default Connections
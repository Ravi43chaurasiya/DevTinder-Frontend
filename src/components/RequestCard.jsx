import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { base_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { removeFeed } from '../utils/feedSlice';

const RequestCard = ({ user }) => {

  const dispatch=useDispatch();

  if (!user || Object.keys(user).length === 0) {
    return <h2 className="text-slate-400 text-center">No more users in your feed!</h2>;
  }

  const { firstName, lastName, photoUrl, age, gender, about, skills = [] } = user;

  const handleSendRequest=async(status,_id)=>{
    try {
      const res=await axios.post(base_URL+"request/send/"+status+"/"+_id,{},{
        withCredentials:true
      })
      dispatch(removeFeed(_id));

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={photoUrl || "https://www.nuflowerfoods.com/wp-content/uploads/2024/09/person-dummy.jpg"}
            alt="Profile"
            referrerPolicy="no-referrer" 
            className="w-full h-60 object-cover"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title">{firstName}, {lastName}</h2>
          {age && gender && <h3 className="text-lg font-semibold">{age}, {gender}</h3>}
          {skills.length > 0 && (
            <p className="mt-2">
              <span className="font-semibold">Skills:</span>{" "}
              {skills.map((skill, index) => (
                <span className="inline-block bg-gray-200 px-2 py-1 text-sm rounded-lg m-1" key={index}>
                  {skill}
                </span>
              ))}
            </p>
          )}
          <p className="mt-2 text-gray-600">{about}</p>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored",user._id)}>Ignore</button>
            <button className="btn btn-secondary" onClick={()=>handleSendRequest("interested",user._id)}>Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

RequestCard.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string,
    about: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default RequestCard;

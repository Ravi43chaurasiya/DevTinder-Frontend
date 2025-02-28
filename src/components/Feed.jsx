import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { base_URL } from '../utils/constant';
import { addFeed } from '../utils/feedSlice';
import RequestCard from './RequestCard';

const Feed = () => {
  const feed=useSelector((store)=>store.feed);
  const dispatch=useDispatch();
const getFeed=async()=>{
  try {
    if(feed){
      return;
    }
    const res=await axios.get(base_URL+"feed",{
      withCredentials:true
    } )
    dispatch(addFeed(res?.data?.data));

    
  } catch (error) {
    console.log(error.message);
  }
}
useEffect(()=>{
  getFeed()
},[]);

  return (feed && (
    <div>
      <RequestCard user={feed[0]}></RequestCard>
    </div>
  )
  )
}

export default Feed
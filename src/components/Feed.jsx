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

if(!feed) return;

if(feed.length<=0) return <h1 className='flex justify-center items-center'>No more user on your feed!</h1>

  return (feed && (
    <div>
      <RequestCard user={feed[0]}></RequestCard>
    </div>
  )
  )
}

export default Feed
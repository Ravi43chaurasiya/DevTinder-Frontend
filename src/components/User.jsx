// import React from 'react'

// const User = (user) => {
//   // const feed=useSelector(store=>store.feed);
 

//   if(!user){
//     return;
//   }
//   if(user.length===0){
//     return <h2 className='text-slate-400 text-center'>No more users in your feed!</h2>
//   }
//   const {firstName,lastName,photoUrl,age,gender,about,skills}=user;
//   console.log("firstname :"+firstName);
//   console.log("url :"+ photoUrl);
//   return (
    
//     <div className='flex justify-center my-10'>
     
//       <div className="card bg-base-100 w-96 shadow-xl">
//   <figure>
//     <img
//       src={photoUrl || "https://www.nuflowerfoods.com/wp-content/uploads/2024/09/person-dummy.jpg"}
//       alt="image" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{firstName+","+lastName}</h2>
//     {age && gender && <h3 className="card-title">{age+","+gender}</h3>}
//     {skills.map((skill,index)=><span className='inline-block' key={index}>{skill+ " "}</span>)}
//     <p>{about}</p>
//     <div className="card-actions justify-center">
//       <button className="btn btn-primary">Ignore</button>
//       <button className="btn btn-secondary">Interested</button>
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }

// export default User
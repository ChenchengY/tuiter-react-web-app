import React from 'react';
// import posts from "./posts.json"
// import PostItem from "./post-item.js"
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
 return(
   <>
     <h4 style={{color:"black"}}>Home</h4>
     <WhatsHappening/>
     <TuitsList/>
   </>
 );
};
export default HomeComponent;


// const HomeComponent = () => {
//     return (
//         <div className="list-group">
//             {posts.map(post => 
//         <PostItem key={post._id} post={post}/>
//     )}
//         </div>
//     )

// };
// export default HomeComponent;
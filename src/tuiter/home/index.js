import React from 'react';
import posts from "./posts.json"
import PostItem from "./post-item.js"


const HomeComponent = () => {
    return (
        <div className="list-group">
            {posts.map(post => 
        <PostItem key={post._id} post={post}/>
    )}
        </div>
    )

};
export default HomeComponent;
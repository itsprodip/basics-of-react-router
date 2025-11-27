import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post=useLoaderData();
    // console.log(post);
    const navigate=useNavigate();
    return (
        <div>
            <h1>Post details here</h1>
            <h2>Title:{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={()=>navigate(`/posts`)}>Go back</button>
        </div>
    );
};

export default PostDetails;
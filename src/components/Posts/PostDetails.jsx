import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post=useLoaderData();
    // console.log(post);

    return (
        <div>
            <h1>Post details here</h1>
            <h2>Title:{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;
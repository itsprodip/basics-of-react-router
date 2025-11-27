import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Post from './Post';

const Posts = () => {
    const posts =useLoaderData();
    console.log(posts);
    return (
        <div>
            <h1>All posts are here..</h1>
            {
                posts.map(post=><Post key={post.id} post={post}></Post>)
                
            }
        </div>
    );
};

export default Posts;
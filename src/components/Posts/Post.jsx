import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {title,id}=post;
    return (
        <div>
            <h2>{id}.{title}</h2>
            <Link to={`/posts/${id}`}><button>View Post</button></Link>
        </div>
    );
};

export default Post;
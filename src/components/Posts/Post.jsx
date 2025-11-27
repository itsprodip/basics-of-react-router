import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {title,id}=post;
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate(`/posts/${id}`);
    }
    return (
        <div>
            <h2>{id}.{title}</h2>
            <Link to={`/posts/${id}`}><button>View Post</button></Link>
            <button onClick={handleNavigate}>Details of {id}</button>
        </div>
    );
};

export default Post;
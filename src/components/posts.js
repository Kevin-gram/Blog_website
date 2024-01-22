import React from 'react';
import image from '../images/pexels-pixabay-259763.jpg';
import '../styles/post.css';
import { AiOutlineLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
const posts = {
  title: "Blog 1",
  imageUrl: image,
  imageSize: "100%",
  text: `Proper nutrition is essential for overall well-being, supporting vital bodily functions and promoting optimal health. It strengthens the immune system, aids in maintaining a healthy weight, and reduces the risk of chronic diseases. Additionally, a balanced diet provides sustained energy, supports cognitive function, and enhances physical performance, fostering a vibrant and active lifestyle.`
};

export default function Posts() {
  return (
    <div className="posts">
      
      <div className="post">
        <img
          className="blog-image"
          src={posts.imageUrl}
          style={{
            width: posts.imageSize,
            height: posts.imageSize
          }}
          alt="Blog Post"
        /> 
        <h2>{posts.title}</h2>
        <p className='post-text'>{posts.text.slice(0, 100) + "..."}</p>
         <AiOutlineLike/>
       <FaCommentDots />
       <button className='post-button'>View Page</button>
      </div>
    </div>
  );
}

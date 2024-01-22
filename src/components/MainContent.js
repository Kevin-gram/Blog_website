// MainContent.js
import React from 'react';
import '../styles/MainContent.css'
import image from '../images/pexels-pixabay-259763.jpg';
import { CiEdit } from "react-icons/ci";
import { MdDeleteSweep } from "react-icons/md";
import { AppContext } from '../context/AppProvider';
import axios from 'axios';
const posts = {
  imageUrl: image,
}
const MainContent = () => {
  const { blogs } = React.useContext(AppContext)

  const handleDelete = async (id) => {
    try{
      window.confirm('Are you sure you want to delete this blog?')
      const res = await axios.delete(`https://blogapi-se2j.onrender.com/api/v1/blogs/${id}`)
      alert('Blog Deleted Successfully');
      window.location.reload();
    } catch(err){
      console.log(err)
    }
  }

  return (
    <div className="main-content">
      <table className='table'>
          <tr>
            <td className='Headers'>image</td>
            <td className='Headers'>Title</td>
            <td className='Headers'><p>Content</p></td>
            <td className='Headers'><p>Action</p></td>
            </tr>
            { blogs.map((item, index) => {
              return (
                <tr className='row' key={index}>
                <td><img src={item.image} className='dashBoard-Image'/></td>
                <td><p>{item.title}</p></td>
                <td><p>{item.description.slice(0, 10) + "..."}</p></td>
                <td><MdDeleteSweep onClick={() => handleDelete(item._id)}/> <CiEdit /> </td>
              </tr> 
              )
            })}
            
        </table> 
    </div>
  );
};

export default MainContent;

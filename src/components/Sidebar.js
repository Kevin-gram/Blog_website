// Sidebar.js
import React from 'react';
import '../styles/sidebar.css';
import { IoHomeOutline } from "react-icons/io5";
import { FaBlogger } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link, Route } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className='title'>Dashboard</h1>
      
      <Link to="/DashHome">
        <h1 className="Text">
          <IoHomeOutline /> Home
        </h1>
      </Link>

      <Link to="/Dashboard" className='card'>
        <h1 className='Text'> <FaBlogger /> Blogs</h1>
      </Link>
      <Link to='/' className='card'>
        <h1 className='Text'> <CiUser />User Home</h1>
      </Link>
      
    </div>
  );
};

export default Sidebar;


import React from 'react';
import'../styles/Heading.css'
import { IoIosNotifications } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { MdFullscreen } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
const Header = () => {
  return (
    <div className="header">
      <h1 >Heading</h1>
      <div className="header-1"> <IoIosNotifications />
      <CiSettings />
      <MdFullscreen />
       <AiOutlineAppstore/>
       </div>
     
    </div>
  );
};

export default Header;

import '../styles/navbar.css';
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
const user ={
    menuIcon:'../images/menu.png',
};

export default function Navbar() {
    return (
      <header>
        <nav className="navbar">
          <div className="logo">My Blog</div>
          <ul className="nav-links">
            <li><a href="#">Blogs</a></li>
            <div className="search-container">
            <input type="text" className="search-input" placeholder="Search"/>
        </div>
        <div className='icons'><FaLinkedinIn /></div>
        <BsTwitterX />
        <FaInstagramSquare />
          </ul>
        </nav>
      </header>
    );
  }
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import '../styles/Footer.css'
export default function Footer() {
    return(
    <footer className="footer">
        <div className="foot-flex" >
            <div >
                <p>© 2024 My Blog</p>
            </div>
            <div>
                <form className="form">
                    <input type="text" placeholder="Your Feedback" className="input"/>
                    <button className="footer-button" type="submit"  >submit</button>
                </form>
            </div>
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
        </div>
            
    </footer>
    )
}
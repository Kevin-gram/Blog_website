import image from "../images/pexels-pixabay-259763.jpg";
import React from "react";
import Navbar from "../components/navBar";
import AboutMe from "../components/aboutme";
import Posts from "../components/posts";
import VisiteOursite from "../components/visitOursite";
import Footer from "../components/Footer";
import "../styles/Home.css";
import { AppContext } from "../context/AppProvider";

function Home() {
  const { blogs } = React.useContext(AppContext)

  return (
    <div className="app-container">
      <Navbar />
      <AboutMe />
      <div className="post-container">
        {blogs.map((item, index) => {
          return (
            <div className="posts" key={index}>
              <div className="post">
                <img
                  className="blog-image"
                  src={item.image}
                  // style={{
                  //   width: posts.imageSize,
                  //   height: posts.imageSize,
                  // }}
                  alt="Blog Post"
                />
                <h2>{item.title}</h2>
                <p className="post-text">{item.description.slice(0, 100) + "..."}</p>
                <button className="post-button">View Page</button>
              </div>
            </div>
          );
        })}
      </div>
      <VisiteOursite />
      <Footer />
    </div>
  );
}

export default Home;

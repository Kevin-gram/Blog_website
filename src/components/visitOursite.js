import React from "react";
import './button'
import image from '../images/african-160206_1280.png';
import '../styles/VisitOursite.css';
const user={
    Partner:'Partener Company',
    CompanyName:"WIldness",
    CompanyAddress:"Kathmandu",
    Imageurl:image,
    imageSize: 300,
    text:"As the world’s leading conservation and hospitality company, we are the proud custodians of our planet's most significant wild places, each chosen to be part of our Collection for a specific purpose and all linked to protecting the land and life that exists there..",
};
export default function VisiteOursite(){
return(
    <div className="site">
    <div className="">
    <h1 className="title-2"> {user.Partner}</h1>
    <h2 className="title-3">Wilderness</h2>
    <p className="Discription"> {user.text}</p>
    </div>
    <div className="photo-div"><img
        className="avatar"
        src={user.Imageurl}
        alt={'Photo of ' + user.CompanyName}
        style={{
          width: user.imageSize,
          height:300,
        }}
      />
      <button className="VisiteOursite-button">viewall</button>
      </div>
    
    </div>

);
}
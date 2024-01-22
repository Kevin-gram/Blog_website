
import '../styles/Aboutme.css';
import './button.js'
const user = {
  name: 'Amanda',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
  me: `Welecome to my my blog, I'm
   a software engineering student. I'm learning React and enjoying it so far. I'm looking forward to learning more about it. I'm also learning about React hooks and loving it so far.`,
    head: 'My Blog'
};

export default function AboutMe() {
  return (
    <div className="about-me">
      <h1 className='title'>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <h1 className='Discription'>{user.me}</h1>
        <h1 className='title'>{user.head}</h1>
    </div>
  );
}

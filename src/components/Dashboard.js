// Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import Header from './heading';
import MainContent from './MainContent';
import '../styles/Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className='Side-head'>
         <Sidebar />
         <div className='topic'>
          <Header/> 
          <MainContent />
         </div> 
        
       </div>
     
    </div>
  );
};

export default Dashboard;

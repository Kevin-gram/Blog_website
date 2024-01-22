import React from 'react';
import Sidebar from './Sidebar';
import Header from './heading';
import AddEditPage from './addEditPage';
import '../styles/Dashboard.css'
import '../styles/DashHome.css'

const Dashboard = () => {
  return (
    
    <div className="dashboard">
      <div className='Side-head'>
         <Sidebar/>
         <div className='topic'>
          <Header/> 
      <AddEditPage/>

    
      </div>
      
      </div>
      
     </div>
    
  );
};

export default Dashboard;
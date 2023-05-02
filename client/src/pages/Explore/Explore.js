import React from 'react';
import Navbar from '../../Components/Navbar_default/Navbar';
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar';
import RightSideBar from '../../Components/RightSideBar/RightSideBar';
import HomeMainBar from '../../Components/HomeMainBar/HomeMainBar';
import './Explore.css';

const Explore = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container-1">
        <LeftSideBar />
        <div className="home-container-2">
          <HomeMainBar />
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Explore;

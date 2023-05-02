import React from 'react';
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar';
import RightSideBar from '../../Components/RightSideBar/RightSideBar';
import ProjectDetails from './ProjectDetails';
import './Explore.css';

const DisplayProject = () => {
  return (
    <div>
      <div className="home-container-1">
        <LeftSideBar />
        <div className="home-container-2">
          <ProjectDetails />
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default DisplayProject;

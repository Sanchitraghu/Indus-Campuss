import React, { useEffect } from 'react';
import Navbar from '../../Components/Navbar_default/Navbar';
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar';
import RightSideBar from '../../Components/RightSideBar/RightSideBar';
import PersonalDashboard from './PersonalDashboard';
import './Dashboard.css';
import { getDescription } from '../../api/project';
import { getUserDetail } from '../../api/auth';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (!data) navigate('/explore', { replace: true });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="home-container-1">
        <LeftSideBar />
        <div className="home-container-2">
          <PersonalDashboard />
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

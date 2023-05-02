import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './LeftSideBar.css';

const LeftSideBar = () => {
  const { data } = useSelector((state) => state.authReducer);
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeClass="active">
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <NavLink to="/Questions" className="side-nav-links" activeClass="active"></NavLink>
          {data === null ? (
            <NavLink to="/about" className="side-nav-links" activeClass="active" style={{ paddingLeft: '20px' }}>
              <p>About</p>
            </NavLink>
          ) : (
            <NavLink to="/dashboard" className="side-nav-links" activeClass="active" style={{ paddingLeft: '20px' }}>
              <p>Dashboard</p>
            </NavLink>
          )}

          <NavLink to="/explore" className="side-nav-links" activeClass="active" style={{ paddingLeft: '20px' }}>
            <p>Explore Project</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSideBar;

import React, { useState } from 'react';
import LoginAsCompany from './LoginAsCompany';  
import LoginAsStudent from './LoginAsStudent';
import LoginAsUniversityAdmin from './LoginAsUniversityAdmin';
import './UserTypeSelector.css'
import { Link } from 'react-router-dom';

const UserTypeSelector = () => {
  const [selectedUserType, setSelectedUserType] = useState(null);

  const handleUserTypeSelect = (userType) => {
    setSelectedUserType(userType);
  };

  return (
    <div>
      <h2 style={{fontSize:'50px'}}>Choose Your User Type</h2>
      <div className="card-container">
        <LoginAsStudent onSelect={handleUserTypeSelect} />
        <LoginAsCompany onSelect={handleUserTypeSelect} />
        <LoginAsUniversityAdmin onSelect={handleUserTypeSelect} />
      </div>
      {selectedUserType && (
        <p>You selected: {selectedUserType}</p>
      )}
      console.log("selectedUserType");
    </div>
  );
};

export default UserTypeSelector;

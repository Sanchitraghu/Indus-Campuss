import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './App_Component/About';
import HowItWorks from './App_Component/How_it_Works';
import Explore from '../pages/Explore/Explore';
import CompanyAuth from '../pages/companyAuth/CompanyAuth';
import Postproject from '../pages/PostProject/Postproject';
import DisplayProject from '../pages/Explore/DisplayProject';
import Dashboard from '../pages/Dashboard/Dashboard';
import AddDescriptionForm from '../pages/Dashboard/AddDescriptionForm';

const Root = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/explore" element={<Explore />} />
      <Route exact path="/howitworks" element={<HowItWorks />} />
      <Route exact path="/companyauth" element={<CompanyAuth />} />
      <Route exact path="/postproject" element={<Postproject />} />
      <Route exact path="/project/:id" element={<DisplayProject />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/editdiscription" element={<AddDescriptionForm />} />
    </Routes>
  );
};

export default Root;

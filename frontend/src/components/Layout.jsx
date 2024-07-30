import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import TDashboard from './TDashboard';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import HDashboard from './HDashboard';

const Layout = () => {
  return (
    <>
   
        <Header /> 

        {/* below routes handle in Header.jsx file */}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/teacher-dash/*" element={<TDashboard />} />
          <Route path="/headquarter-dash/*" element={<HDashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Login />} />
        </Routes>
     
    </>
  );
}

export default Layout;

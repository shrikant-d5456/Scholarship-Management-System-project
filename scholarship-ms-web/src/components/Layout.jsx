import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import TDashboard from './TDashboard';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Layout = () => {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dash/*" element={<TDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Login />} />
        </Routes>
     
    </>
  );
}

export default Layout;

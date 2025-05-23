import React from 'react'
import {Navigate, Outlet} from "react-router-dom"

const ProtectedRoute = () => {
  const user = true;
  return user ? <Outlet/> : <Navigate to="/"/>
}

export default ProtectedRoute

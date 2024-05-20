import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ path, children }) => {
  const { data: User } = useSelector((state) => state.authReducer);
  const loginAs = User?.result?.loginAs;

  if (loginAs === "Company" || loginAs === "College") {
    return children;
  }
else if(loginAs === "Student") {
      return <Navigate to="/dashboard" />;
  }
  return <Navigate to ="/" />
};

export default ProtectedRoutes;

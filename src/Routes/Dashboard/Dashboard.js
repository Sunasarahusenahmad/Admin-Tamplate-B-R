import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../../Pages/Dashboard/AdminDashboard";

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<AdminDashboard />}></Route>
      </Routes>
    </>
  );
};

export default Dashboard;

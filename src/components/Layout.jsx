import React from "react";
import Navbar from "./Navbar.jsx";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  );
};

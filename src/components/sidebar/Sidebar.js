import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = props => {
  const {isSidebarOpen, handleCloseSidebar} = props

  return (
    <section className="">
      <div className="row ml-5 mobile-header">
        <h2 className="text-center mt-4">ASTEROIDX</h2>
        <div onClick={handleCloseSidebar} className="close-btn">&times;</div>
      </div>
      <div className="py-5 px-2">
        <div className="sidebar-link">
          <Link to="/add-store">Add Store</Link>
        </div>
              <div className="sidebar-link">
        <Link to="/">View Stores</Link>
              </div>
      </div>
    </section>
  );
};

export default Sidebar;

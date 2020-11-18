import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = props => {
  return (
    <section className="">
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

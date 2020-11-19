import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import AddStore from "./views/AddStore/AddStore";
import Dashboard from "./views/Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./views/Profile/Profile";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false)

  const closeSideBar = () => {
    setOpenSideBar(false)
  }
  const openSideBarHandler = () => {
    setOpenSideBar(true)
  }

   const sidebarClass = openSideBar ? "open-side-bar" : "col-md-3 side-bar"
  return (
    <Router>
      <div className="app-container">
        <div>
          <div className="row">
            <div className={sidebarClass}>
              <Sidebar handleCloseSidebar={closeSideBar} isSidebarOpen={openSideBar} />
            </div>
            <div className="bars-container" onClick={openSideBarHandler}>
              <div className="bars"></div>
              <div className="bars"></div>
              <div className="bars"></div>
            </div>
            <div className="col-md-9 page-container">
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/add-store" exact component={AddStore} />
                <Route
                  path="/store/:storeId/dashboard"
                  exact
                  component={Profile}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

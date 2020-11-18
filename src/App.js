import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import AddStore from "./views/AddStore/AddStore";
import Dashboard from "./views/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div>
          <div>welcome to here</div>
          <div className="row">
            <div className="col-md-3 side-bar">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/add-store" exact component={AddStore} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

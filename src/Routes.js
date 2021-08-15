import React from "react";
import { Route, Link, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Shows from "./components/Shows";
import ShowPage from "./components/ShowPage";

const Routes = () => {
  return (
    <HashRouter>
      <div>
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shows">Shows</Link>
          </li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/shows" component={Shows} />
          <Route path="/shows/:id" component={ShowPage} />
        </div>
      </div>
    </HashRouter>
  );
};

export default Routes;

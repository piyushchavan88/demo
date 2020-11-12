import React from "react";
import "./App.css";
import NavTabs from "./pages/NavTabs";

import BookingModule from "./pages/BookingModule";
import VehicleModule from "./pages/VehicleModule";
import TutorialModule from "./pages/TutorialModule";
import { Switch, Route } from "react-router-dom";
import history from "./HistoryContainer/History";
import { Router } from "react-router-dom";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <NavTabs />

        <Switch>
          <Route path="/vehicle" exact component={VehicleModule} />
          <Route path="/tutorial" exact component={TutorialModule} />
          <Route path="/booking" exact component={BookingModule} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

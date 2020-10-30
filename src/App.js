import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import EditProfile from "./route/editprofile";
import Sigin from "./route/sigin";
import Editvote from "./route/editvote";
import Signup from "./route/siginup";
import Profile from "./route/profile";
import VotersList from "./route/voterslist";
import './App.css';
import Landing from "./route/landing"

// Materia UI===  for more icon
// ControlPointRounded = more icon
// CardGiftcard = Schedule for voting 
// HowToReg = Eligibity for voting

//   Todos
// 1. Routers
    // a. Landing page 
    // b. votersList Componemt
    // c. Register Component
    // d. Profile Compoonent
    // e. Create account component
    // f. Voters and vottedfor List Route
    // g. Edit Voters
    // h. Edit Profile

    // Softwares.
      // Axios
      // Firebase
      // Material ui


function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/voterslist" component={VotersList} />
          <Route path="/profile" component={Profile} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Sigin} />
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/editvote" component={Editvote} />
          <Route exact path="/" component={Landing} />
      </Router>
    </div>
  );
}

export default App;

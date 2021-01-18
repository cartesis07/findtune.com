
import React from "react";
import './assets/app';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Home} from './pages/Home'
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import {Login} from "./pages/Login";
import Bands from "./pages/Bands";
import Band from "./pages/Band";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import {Register} from "./pages/Register";
import {MultiActionButton} from "./components/MultiActionButton";
import Footer from "./components/Footer"
import "./app.css"
import 'mdbreact/dist/css/mdb.css'


function App() {
  return (
      <Router>
        <div>
          <div class="area" >
            <ul class="circles">
                    <sub></sub>
                    <sub></sub>
                    <sub></sub>
                    <sub></sub>
                    <sub></sub>
                    <sub></sub>
                    <sub></sub>
                    <sub></sub>
                    <sub></sub>
                    <sub></sub>
                    <Navbar />
          <div className="multi-action-button">
            <MultiActionButton />
          </div>
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/bands">
              <Bands />
            </Route>
            <Route path="/band/:id">
              <Band />
            </Route>
            <Route path="/artists">
              <Artists/>
            </Route>
            <Route path="/artist/:id">
              <Artist />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ul>
        </div>
        </div>
        <Footer />
      </Router>
  );
}

export default App;
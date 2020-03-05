import React, { Component } from "react";
import "./App.css";
import Logo from "./Logo.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Navigation from "./Navigation.js";
import {Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Spa from "./Spa";
import Salon from "./Salon";
import Ayurveda from "./Ayurveda";
import Star from "./Star";
import TellyourFriends from "./TellyourFriends";



class Ditto extends Component {

render() {
    

    return (
      <div>
        <div className="social">
          <a href="https://www.facebook.com/"><FaFacebookF></FaFacebookF></a>
          <a href="https://www.youtube.com"><FaYoutube></FaYoutube></a>
          <a href="https://www.instagram.com"><FaInstagram></FaInstagram></a>
        </div>
        
        <div className="logo">
          <img src={Logo} className="App-logo" alt="logo"/>
        </div>

        <div className="search">
          <input placeholder="Search here..." type="text" />
        </div>

        <div className="menu">
        <Navigation/>
          
          <div className="menu-log">
            <Router>
              <Link to="/login">LOGIN</Link>
            </Router>
          </div>
        </div>

        <div className="img-div">
          <div className="img-1-div">
            <img className="cover" src="./spa.jpg" alt="spa" />
          </div>
          <div className="img-2-div">
            <img className="cover" src="./spa1.jpg" alt="spa" />
          </div>
        </div>

        <div className="footer-div">
          <footer>FOOTER</footer>
        </div>
        
        <Router>
          <Switch>
          <Route path="/Spa" component={Spa} />
          <Route path="/Salon" component={Salon} />
          <Route path="/Ayurveda" component={Ayurveda} />
          <Route path="/Star" component={Star} />
          <Route path="/Tell your Friends" component={TellyourFriends} />
          </Switch>
          
        </Router>
        
      </div>
    );
  }
}

export default Ditto;
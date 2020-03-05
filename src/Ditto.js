import React, { Component } from "react";
import "./App.css";
import Logo from "./Logo.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

class Ditto extends Component {

render() {
    // const images = ["./spa.jpg", "./spa1.jpg"];
    // const imageList = images.map(image => <img src={image} alt="spa" />);

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
          <a href="#Spa">Spa</a>
          <a href="#Salon">Salon</a>
          <a href="#Ayurveda">Ayurveda</a>
          <a href="#Star">Star</a>
          <a href="#Tell your friends">Tell your Friends</a>
          <div className="menu-log">
            <a href="#login">LOGIN</a>
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
      </div>
    );
  }
}

export default Ditto;
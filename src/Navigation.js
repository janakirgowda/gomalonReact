import React from 'react';
// import "./App.css";
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
           <Router>
              <NavLink to={"/Spa"} target="_blank">Spa</NavLink>
              <NavLink to={"/Salon"} target="_blank">Salon</NavLink>
              <NavLink to={"/Ayurveda"} target="_blank">Ayurveda</NavLink>
              <NavLink to={"/Star"} target="_blank">Star</NavLink>
              <NavLink to={"/Tell your friends"} target="_blank">Tell your Friends</NavLink>
            </Router>
       </div>
    );
}
 
export default Navigation;
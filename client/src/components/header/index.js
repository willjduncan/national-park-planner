import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  function userdata() {
    return Auth.getProfile();
  }

  return (
    <div class="navbar-fixed nav-transparent">
    <nav class="nav-transparent">
      <div class="nav-wrapper">
        <a href="./index.html" class="brand-logo">National Park Picker</a>
        <ul class="right hide-on-med-and-down">
          <li id="desc-link" class="hide"><a href="./index.html#desc-header">Description</a></li>
          <li id="map-link" class="hide"><a href="./index.html#map">Map</a></li>
          <li id="toDos-link" class="hide"><a href="./index.html#activities-header">Activities</a></li>
          <li id="tours-link" class="hide"><a href="./index.html#tours-header">Tours</a></li>
          <li id="weather-link" class="hide"><a href="./index.html#five-day-forecast">Weather</a></li>
          <li id="main-map-link"><a href="./index.html#main-map">Map</a></li>
          <li><a href="./index.html#resources">Resources</a></li>
        </ul>
      </div>
    </nav>
  </div>
  );
};

export default Header;
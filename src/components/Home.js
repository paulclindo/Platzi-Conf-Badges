import React from "react";
import { Link } from "react-router-dom";

import LogoHero from "../images/astronauts.svg";
import imgConf from "../images/platziconf-logo.svg";
import "./styles/Home.css";

function Home(props) {
  return (
    <React.Fragment>
      <div className="Home__container">
        <div className="Home__details">
          <img src={imgConf} alt="" />
          <h1>Print your Badges</h1>
          <p>The easiest way to manage your conference</p>
          <Link to="/badges">Start Now</Link>
          <Link to="/ricknmorty" className="btn btn-danger btn-sm d-block m-4">
            Nope, I want to see Rick N Morty
          </Link>
          <h2>By Paul Ccari</h2>
        </div>
        <div className="Hero__image">
          <img src={LogoHero} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;

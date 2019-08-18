import React from "react";
import "./styles/NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <React.Fragment>
      <div className="NotFound__container">
        <div>404</div>
        <h1> Not Found</h1>
        <Link to="/">Return to Home</Link>
      </div>
    </React.Fragment>
  );
}

export default NotFound;

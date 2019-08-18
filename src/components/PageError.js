import React from "react";
import "./styles/PageError.css";

function PageError(props) {
  return (
    <div className="PageError">
      <h1>Error</h1>
      <p>{props.error.message}</p>
    </div>
  );
}

export default PageError;

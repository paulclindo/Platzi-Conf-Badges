import React from "react";

function RickBadge(props) {
  return (
    <div className="col text-center m-3">
      <div className="card">
        <img className="card-image-top" src={props.character.image} alt="" />
        <div className="card-body">
          <h3 className="card-title">{props.character.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default RickBadge;

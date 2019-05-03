import React from "react";
import "./style.css";

function PlayerCard(props) {
  return (
    <div className="col-3 container">
            <div className="card" onClick={props.imageClick}>
                <img src={props.image} className="card-img-top" alt=""/>
            </div>
        </div>
  );
}

export default PlayerCard;

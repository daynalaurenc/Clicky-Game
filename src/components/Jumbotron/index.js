import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron text-center">
            <h1>CLICKY GAME</h1>
            <img src="./images"
            <p className="by-line">GOLDEN STATE WARRIORS</p><hr/>

            <p className="currentScore">score: {props.score}</p>
            <p className="topScore">top score: {props.topScore}</p>
        </div>
    );
}
export default Jumbotron;
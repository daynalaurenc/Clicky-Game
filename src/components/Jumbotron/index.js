import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron text-center">
            {/* <h1>CLICKY GAME</h1> */}
            <img src="./images/logo.png" alt="" id="logo"/>
            <p className="by-line">Click until all have been chosen;<br/> do not click same image twice!</p><hr/><br />

            <p className="currentScore">score: {props.score}</p>
            <p className="topScore">top score: {props.topScore}</p>
        </div>
    );
}
export default Jumbotron;
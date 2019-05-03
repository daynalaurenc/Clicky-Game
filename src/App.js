import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import player from "./players.json";
import Jumbotron from "./components/Jumbotron";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the players json array
  state = {
    player,
    clickedPlayer: [],
    score: 0,
  };

  //When you click on a card... the player is taken out of the array.
  imageClick = event => {
    const currentPlayer = event.target.alt;
    const playerAlreadyClicked =
      this.state.clickedPlayer.indexOf(currentPlayer) > -1;

    //If you click on a player that has already been selected, the game is reset and cards shuffled.
    if (playerAlreadyClicked) {
      this.setState({
        player: this.state.player.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedPlayer: [],
        score: 0
      });
      alert("You lose. Play again?");

      //if you click on an available player, your score is increased and cards shuffled.
    } else {
      this.setState(
        {
          player: this.state.player.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedPlayer: this.state.clickedPlayer.concat(
            currentPlayer
          ),
          score: this.state.score + 1
        },
        //if you get all 12 fish corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("You are the Winner!");
            this.setState({
              player: this.state.player.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedPlayer: [],
              score: 0
            });
          }
        }
      );
    }
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {/* <Navbar /> */}
        <Jumbotron>score={this.state.score}</Jumbotron>
        <div className="container cards">
          <div className="row">
            {this.state.player.map(p => (
              <PlayerCard
                id={p.id}
                image={p.image}
                key={p.id}
                imageClick={this.imageClick}
                // handleClick={() => this.handleRemove(p.id)}
              />
            ))}
          </div>
          <Footer />
        </div>
      </Wrapper>
    );
  }
}

export default App;

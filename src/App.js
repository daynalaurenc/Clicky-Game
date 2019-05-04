import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import players from "./players.json";
import Jumbotron from "./components/Jumbotron";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function shuffleFriends(array) {
  for(let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], [array[j]] = [array[j], [array[i]];
  }
  return array;
}

class App extends Component {
  // Setting this.state.friends to the players json array
  state = {
    players,
    clickedPlayer: [],
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
  };

  //When you click on a card... the player is taken out of the array.
  handleClick = id => {
    if (this.state.clickedPlayer.indexOf(id) === -1){
      this.handleIncrement();
      this.setState({ clickedPlayer: this.state.clickedPlayer.concat(id) });

    } else {
      this.handleReset();
    }
  };



   else {
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
        //if you get all 12 players corrent you get a congrats message and the game resets        
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


  // Map over this.state.friends and render a PlayerCard component for each player object
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

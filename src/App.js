import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import players from "./players.json";
import Jumbotron from "./components/Jumbotron";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function shufflePlayers(array) {
  for(let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  // Setting this.state.players to the players json array
  state = {
    players,
    clickedPlayer: [],
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
  };


  handleClick = id => {
    if (this.state.clickedPlayer.indexOf(id) === -1){
      this.handleIncrement();
      this.setState({ clickedPlayer: this.state.clickedPlayer.concat(id) });

    } else {
      this.handleReset();
    }
  };


  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "No win for you :(",
      clickedPlayer: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledPlayers = shufflePlayers(players);
    this.setState({ players: shuffledPlayers });
  };


  render() {
    return (
      <Wrapper>
        {/* <Navbar /> */}
        <Jumbotron  
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}/>
        
        
        <div className="container cards">
          <div className="row">
            {this.state.players.map(p => (
              <PlayerCard
                id={p.id}
                image={p.image}
                handleClick={this.handleClick}
                handleIncrement={this.handleReset}
                handleShuffle={this.handleShuffle}
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

import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import AddText from "./components/AddText";
import cards from "./cards.json";

var chosen = [];
var hiscore = 0;

// function to shuffle the card order in a new array of ids
function shuffleArray(array) {
  // let i = array.length - 1;
  for (let i = (array.length - 1); i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards
  };

    // a select method to determine what happens when a card is clicked
    select = id => {
      // if the id chosen has already been chosen, reset the chosen array and reshuffle
      if (chosen.includes(id)) {
      chosen = [];
      this.setState({ cards });
      // if the id hasn't been chosen, push the id to the 'chosen' array, set the new high
      // score to be equal to the length of the array (current score), and reshuffle
      } else {
      chosen.push(id);
      if (chosen.length > hiscore) {
      hiscore = chosen.length;
      };
      this.setState({ cards });
  };
}


  // Map over this.state.cards and render a FriendCard component for each friend object
  render() {
    const shuffledCards = shuffleArray(this.state.cards);
    return (
      <Wrapper>
        <Title>Clicky Game for Android: Netrunner IDs</Title>
        <AddText>Click each ID card only once!         Score: {chosen.length}        High Score: {hiscore}</AddText>

        {shuffledCards.map(friend => (  
          <FriendCard
            select={this.select}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

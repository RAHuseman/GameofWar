// Coding Steps:
// For the final project you will be creating an automated version of the classic card game WAR! 
// There are many versions of the game WAR. In this version there are only 2 players.

// You do not need to do anything special when there is a tie in a round.

// Think about how you would build this project and write your plan down. Consider classes such as: 
// Card, Deck, Player, as well as what properties and methods they may include.

// You do not need to accept any user input, when you run your code, the entire game should play out 
// instantly without any user input inside of your browser's console.

// The completed project should, when executed, do the following:

// Deal 26 Cards to each Player from a Deck of 52 cards.

// Iterate through the turns where each Player plays a Card.

// The Player who played the higher card is awarded a point.

// Ties result in zero points for both Players.

// After all cards have been played, display the score and declare the winner.


class Card {
    constructor (suit, number, value){
        this.suit = suit;
        this.number = number;
        this.value = value;
    }
    
     
    }
    console.log("Welcome to the Game of War")
    class Deck {
        constructor (){
            this.cards = [];
            this.suits = ['hearts', 'spades', 'clubs', 'diamonds'];
            this.numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
            
          for (let suit of this.suits){
                for (let i = 0; i < this.numbers.length; i++){
                   this.cards.push(new Card(suit, this.numbers[i], i));
                  }
            }  
        // console.log(this.cards);
        }
        
      // let arrayToShuffle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      //method for shuffling
      shuffleCards() {
        console.log("Cards are shuffling");
        for (let i = this.cards.length - 1; i > 0; i--) {
          let radomNumber = Math.floor(Math.random() * (i + 1));
          let temp = this.cards[i];
          //swap the elements
          this.cards[i] = this.cards[radomNumber];
          this.cards[radomNumber] = temp;
        }
        // console.log(this.cards)
        return this.cards;
      
    }
   
      
    }
    
    let newDeck = new Deck();
    let shuffledDeck = newDeck.shuffleCards();
    
    let player1Score = 0;
    let player2Score = 0;
    
    let player1Deck = shuffledDeck.slice(0,26);
    let player2Deck = shuffledDeck.slice(26,52);
    // console.log(player1Deck);
    // console.log(player2Deck);
    for(let i =0; i < player1Deck.length; i++){
      if(player1Deck[i].value > player2Deck[i].value ){
        player1Score++;
        } else {
        player2Score++;
        } 
    }
    
    if(player1Score > player2Score){
      console.log("Player 1 wins");
    } else if (player2Score > player1Score) {
      console.log("Player 2 wins");
    } else if (player1Score === player2Score) {
      console.log("It's a tie");
    }
    
    
    console.log(player1Score);
    console.log(player2Score);
    
    

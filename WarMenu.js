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

// Card Class with the constructor suit, the number of the card and finally the value for the array
class Card {
    constructor (suit, number, value){
        this.suit = suit;
        this.number = number;
        this.value = value;
    }
    
     
    }
    console.log("Welcome to the Game of War")
    // Class Deck inside of this class I will apply the array to this.cards and include the method Shuffle Cards
    // inside of this I run the for loop to generate a random array to pass to the two players
    class Deck {
        constructor (){
            this.cards = [];
            this.suits = ['hearts', 'spades', 'clubs', 'diamonds'];
            this.numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
        //  loop to push the class parameters to the array of this.cards and each array now has a suit, number, and the value for us to compare them.
          for (let suit of this.suits){
                for (let i = 0; i < this.numbers.length; i++){
                   this.cards.push(new Card(suit, this.numbers[i], i));
                  }
            }  
        // console.log(this.cards);
        }
        
      
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
    //These variables will create a new Class Deck and shuffle the arrays to pass to the players
    let newDeck = new Deck();
    let shuffledDeck = newDeck.shuffleCards();
    // Two variables to keep track of each players score.
    let player1Score = 0;
    let player2Score = 0;
    // Using the slice method to divide the array into two parts
    let player1Deck = shuffledDeck.slice(0,26);
    let player2Deck = shuffledDeck.slice(26,52);
    // console.log(player1Deck);
    // console.log(player2Deck);
    //For loop to decide wich player will recieve the point
    for(let i =0; i < player1Deck.length; i++){
      if(player1Deck[i].value > player2Deck[i].value ){
        player1Score++;
        } else {
        player2Score++;
        } 
    }
    // below will send the message for who wins Player 1 wins, Player two wins or its a tie!!
    if(player1Score > player2Score){
      console.log("Player 1 wins");
    } else if (player2Score > player1Score) {
      console.log("Player 2 wins");
    } else if (player1Score === player2Score) {
      console.log("It's a tie");
    }
    
    // Below will show both player 1 score and player two
    console.log(player1Score);
    console.log(player2Score);
    
    

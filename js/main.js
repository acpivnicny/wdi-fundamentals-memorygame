
// create array of cards
var cards = ["queen", "queen", "king", "king"];
// create array for cards in play
var cardsInPlay = []
// user flips card one
var cardOne = cards[0];
// card one in play
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
//user flips card two
var cardTwo = cards[2];
//card two in play
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

// how many cards in cards in play
if (cardsInPlay.length === 2) {
if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");


}

}

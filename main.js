//gets random adjective + noun
var findVerbs = require("./verbs.js");
var findAdjective = require("./adjectives.js");
var findNoun = require("./nouns.js");

//Life counter
let Life = ["♥", "♥", "♥"];

//random binary generator
let Random = () => {
  return Math.floor(Math.random() * 2);
};

//lifestatus generation from random binary
generateLifeStatus = () => {
  if (Random() === 0) {
    lifeStatus = "alive";
  } else {
    lifeStatus = "dead";
  }
};

//concoct sentence based on imported sentence components+random variable generation
sentenceConcoction = () => {
  console.log(
    "You find a " +
      findAdjective() +
      " " +
      findNoun() +
      " and decide to " +
      findVerbs() +
      " it, you are " +
      lifeStatus +
      " after the encounter"
  );
};

//display message based on lifestatus
let ReRoll = () => {
  if (lifeStatus === "alive") {
    console.log("You live another day!");
  } else {
    console.log("You lose a life");
    Life.pop();
  }
};

//display final loop death message
Death = () => {
  if (Life.length === 0) {
    console.log("You have died");
  }
};

//loop through runs
do {
  Random();
  generateLifeStatus();
  console.log("Lives:", Life);
  sentenceConcoction();
  ReRoll();
  Death();
} while (Life.length > 0);

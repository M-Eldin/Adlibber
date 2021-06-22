//gets random adjective + noun
var findVerbs = require("./verbs.js");
var findAdjective = require("./adjectives.js");
var findNoun = require("./nouns.js");

//defines chance of survival
let Random = () => {
  return Math.floor(Math.random() * 2);
};

let Odds = () => {
  if (Random() === 0) {
    return "alive";
  } else {
    return "dead";
  }
};

console.log(
  "You find a " +
    findAdjective() +
    " " +
    findNoun() +
    " and decide to " +
    findVerbs() +
    " it, you are " +
    Odds() +
    " after the encounter"
);

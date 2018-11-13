const diceRoll = (numberOfDice, numberOfDieSides) => {
  const resultsArray = [];
  const resultsObj = {};
  if(numberOfDice > 0){
    for (let i = 0; i < numberOfDice; i++) {
      resultsArray.push(rollDie(numberOfDieSides));
    }
    resultsObj.results = resultsArray;
    resultsObj.total = resultsArray.reduce(function(a,b){return a + b;}, 0);
  } else {
    resultsObj.results = [];
    resultsObj.total = 0;
  }
  return resultsObj;
}

const rollDie = (numberOfDieSides) => {
  return Math.floor(Math.random() * numberOfDieSides) +1;
}
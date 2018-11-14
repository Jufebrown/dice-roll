const diceRoll = (numberOfDice, numberOfDieSides) => {
  const resultsArray = [];
  const DiceRollResultsObj = {};
  DiceRollResultsObj.numberOfDice = numberOfDice;
  DiceRollResultsObj.numberOfDieSides = numberOfDieSides;
  
  for (let i = 0; i < numberOfDice; i++) {
    resultsArray.push(Math.floor(Math.random() * numberOfDieSides) +1);
  }
  
  DiceRollResultsObj.results = resultsArray;
  DiceRollResultsObj.total = resultsArray.reduce(function(a,b){return a + b;}, 0);

  return DiceRollResultsObj;
}


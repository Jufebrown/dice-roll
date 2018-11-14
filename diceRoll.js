const diceRoll = (numberOfDice, numberOfDieSides) => {
  const resultsArray = [];
  const resultsObj = {};
  resultsObj.numberOfDice = numberOfDice;
  resultsObj.numberOfDieSides = numberOfDieSides;
  
  if(numberOfDice > 0){
    for (let i = 0; i < numberOfDice; i++) {
      resultsArray.push(Math.floor(Math.random() * numberOfDieSides) +1);
    }
    resultsObj.results = resultsArray;
    resultsObj.total = resultsArray.reduce(function(a,b){return a + b;}, 0);
  } else {
    resultsObj.results = [];
    resultsObj.total = 0;
  }
  return resultsObj;
}


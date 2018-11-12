const diceRoll = (numberOfDice, numberOfDieSides) => {
  const result = 0;
  for (let i = 0; i < numberOfDice; i++) {
    result += rollDie(numberOfDieSides);    
  }
}

const rollDie = (numberOfDieSides) => {
  return Math.floor(Math.random() * numberOfDieSides) +1
}
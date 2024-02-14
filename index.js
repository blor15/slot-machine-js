const prompt = require("prompt-sync")();

// Collecting the deposit money from the user
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    // parseFloat takes a string and converts it into it's floating value
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again");
    } else {
      return numberDepositAmount;
    }
  }
};

// Determine a user's number of lines they are betting
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, try again");
    } else {
      return numberOfLines;
    }
  }
};

const depositAmount = deposit();
const numberofLines = getNumberOfLines();

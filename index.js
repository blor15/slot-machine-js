const prompt = require("prompt-sync")();

// Collecting the deposit money from the user
const deposit = () => {
  const depositAmount = prompt("Enter a deposit amount: ");
  while (true) {
    // parseFloat takes a string and converts it into it's floating value
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again");
    } else {
      return numberDepositAmount;
    }
  }
};

const depositAmount = deposit();

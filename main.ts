import inquirer from "inquirer";

async function main() {
  // Prompt the user for various banking details
  let user = await inquirer.prompt([
    {
      type: "string",
      name: "cardholderName",
      message: "Welcome Raffay",
    },
    {
      type: "number",
      name: "pinCode",
      message: "Enter your 4 digit code",
    },
    {
      type: "list",
      name: "accountType",
      message: "Select your account type",
      choices: ["current", "saving"],
    },
    {
      type: "list",
      name: "transactionType",
      message: "Select your transaction type",
      choices: ["cash", "withdrawal"],
    },
    {
      type: "list",
      name: "amount",
      message: "Select your amount",
      choices: [1000, 2000, 5000, 10000],
      when: (user) => user.transactionType === "cash",
    },
    {
      type: "number",
      name: "amount",
      message: "Enter your amount",
      when: (user) => user.transactionType === "withdrawal",
    },
  ]);

  // Display transaction details if PIN code is provided
  if (user.pinCode) {
    const balance = Math.floor(Math.random() * 10000 + 1); // Simulating balance
    console.log("Current Balance:", balance);

    const enteredAmount = user.amount;
    if (enteredAmount <= balance) {
      const remainingBalance = balance - enteredAmount;
      console.log(
        `You have withdrawn rupees ${enteredAmount} and your remaining balance is ${remainingBalance}`
      );
    } else {
      console.log("Insufficient balance!");
    }
  }
}

main();



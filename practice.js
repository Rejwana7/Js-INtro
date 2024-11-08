// const prompt = require('prompt-sync')();
// var taka=parseFloat(prompt("Enter the money I have:"));
// var OrangePrice=parseFloat(prompt("Enter the OrangePrice:"));
// // Calculate the remaining amount after purchasing oranges
// var returnTaka = taka - OrangePrice;
// // Display the result
// console.log("Shopkeeper should return: " + returnTaka + " Taka");

const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  //Ask the user for input
rl.question("Enter the money I have: ", (takaInput) => {
  const taka = parseFloat(takaInput);
  
  rl.question("Enter the price of oranges: ", (orangePriceInput) => {
    const orangePrice = parseFloat(orangePriceInput);
    
    // Calculate the remaining money
    const returnTaka = taka - orangePrice;
    
    console.log("Shopkeeper should return: " + returnTaka + " Taka");
    
    // Close the readline interface
    rl.close();
  });
});
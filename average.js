const readline = require('readline');

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let subjects = ['Math', 'Biology', 'Chemistry', 'Physics', 'Bangla'];
let total = 0;
let index = 0;

// Function to get marks for each subject and calculate the total
function getMarks(){
    if(index< subjects.length){
        rl.question(`Enter marks  for ${subjects[index]}:`, (input) => {
            total +=parseFloat(input);
            index++;
            getMarks();// Recursively call to get the next subject's marks

        });
    }
    else {
        const avg = total / subjects.length;
        console.log(`The average marks of this student is = ${avg.toFixed(2)}`);
        rl.close();// Close the readline interface after all input is processed
      }
    //   rl.close();
}
// Start the input process
getMarks();
const inquirer = require("inquirer");

// TODO: Include packages needed for this application
console.log("Hello!")
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt(
    [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your projecy?',
            validate: titleInput => {
                if (titleInput) {
                    return true
                }
                else {
                    console.log ('Please enter your title!')
                    return false;
                }
            }
        }
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptUser();
init();

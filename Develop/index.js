// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt(
    [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true
                }
                else {
                    console.log ('Please enter your title!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'desc',
            message: 'Please describe your project.',
            validate: descInput => {
                if (descInput) {
                    return true
                }
                else {
                    console.log ('Please enter a description!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please provide a step-by-step description of how to install this application.',
            validate: installInput => {
                if (installInput) {
                    return true
                }
                else {
                    console.log ('Please explain the installation process!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'use',
            message: 'Please provide instructions on how to use this application.',
            validate: useInput => {
                if (useInput) {
                    return true
                }
                else {
                    console.log ('Please provide instructions!')
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license(s) does this application use?',
            choices: ['A', 'B', 'C', 'D', 'E']
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How can other developers contribute to this project?',
            validate: contributeInput => {
                if (contributeInput) {
                    return true
                }
                else {
                    console.log ('Please explain if/how another developer may contribute!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: githubInput => {
                if (githubInput) {
                    return true
                }
                else {
                    console.log ('Please provide your GitHub username!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?',
            validate: emailInput => {
                if (emailInput) {
                    return true
                }
                else {
                    console.log ('Please provide your e-mail address!')
                    return false;
                }
            }
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {  
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then(readmeData => {
            const pageMD = generateMarkdown(readmeData);
    
        fs.writeFile('./dist/README.md', pageMD, err => {
            if (err) throw new Error(err);
            console.log('README created! Check it out in your dist folder!');
        });
    });
}
  

// Function call to initialize app
init()

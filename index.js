// Packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const utils = require("utils");

const generatorMarkdown = require('./utils/generateMarkdown');

//  Array of questions for user input
const questions = [{
    type: "input",
    message: "What is the tittle of the project?",
    name: "Title"
    }, {
        type:"input",
        message: "What is the project about? Provide a detailed despcription of your project?",
        name: "Description"
    }, {
        type: "input",
        message: "Table of Contents",
        name:"Table of contents"
    }, {
        type: "input",
        message: "What does the user need to install to run this app (ie... dependencies)?",
        name: "Installation"
    }, {
        type: "input",
        message: "How is the app used? Provide Instructions",
        name: "Usage"
    }, {
        type: "input",
        message: "What license is being used? (ie...MIT)",
        name: "License"
    }, {
        type: "input",
        message: "Who contributed on this projcet",
        name: "Contributors"
    },{
        type: "input",
        message: "What commands are needed to test this app?",
        name: "Test-Commands"
    }, {
        type: "input",
        message: "Contact info for questions",
        name: "Questions"
    }, {
        type: "input",
        message: "What is your Github usename?",
        name: "Github-Username"
    },
]

// Function to write README file
fs.writeFile('README.md',generatorMarkdown, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
    

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generatorMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
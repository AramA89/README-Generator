// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {writeFile} = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "title",
            message: "Enter Project Title",
           
        },
        
        {
            type: "input",
            name: "description",
            message: "Provide Project Description",
            
        },

        {
            type: "input",
            name: "installation",
            message: "Enter Project Installation Instructions",
            
        },

        {
            type: "input",
            name: "usage",
            message: "Enter Project Usage Information",
           
        },

        {
            type: "input",
            name: "contribution",
            message: "Enter Project Contribution Guidlines",
            
        },

        {
            type: "input",
            name: "test",
            message: "Enter Project Test Instructions",
            
        },

        {
            type: "input",
            name: "mockupimg",
            message: "Attach A Project MockUp Image Using This Format '<img src=''>' ",
           
        },

        {
            type: "input",
            name: "deployedURL",
            message: "Enter Deployed Project URL",
            
        },

        {
            type: "input",
            name: "github",
            message: "Enter GitHub Repository",
            
        },

        {
            type: "checkbox",
            name: "badge",
            message: "Select A Project License Badge",
            choices: [
                "Boost",
                "IBM",
                "MIT",
                "Apache",
            ],
           
        },

    ]);
};

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
    questions().then((data) => {
        writeFile(data);
    });
    
}

// Function call to initialize app
init();

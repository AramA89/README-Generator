// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.questions([
        {
            type: "input",
            name: "title",
            message: "Enter Project Title",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                }   else {
                    console.log("Please Enter A Project Title!");
                    return false;
                }
            },
        },
        
        {
            type: "input",
            name: "description",
            message: "Provide Project A Description",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                }   else {
                    console.log("Please Provide A Description For Your Project!");
                    return false;
                }
            },
        },

        {
            type: "input",
            name: "installation",
            message: "Enter Project Installation Instructions",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                }   else {
                    console.log("Please Enter A Project Installation Instructions!");
                    return false;
                }
            },
        },

        {
            type: "input",
            name: "usage",
            message: "Enter Project Usage Information",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                }   else {
                    console.log("Please Enter Project Usage Information!");
                    return false;
                }
            },
        },

        {
            type: "input",
            name: "contribution",
            message: "Enter Project Contribution Guidlines",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                }   else {
                    console.log("Please Enter Project Contribution Guidlines!");
                    return false;
                }
            },
        },

        {
            type: "input",
            name: "test",
            message: "Enter Project Test Instructions",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                }   else {
                    console.log("Please Enter Project Test Instructions!");
                    return false;
                }
            },
        },

        {
            type: "input",
            name: "mockupimg",
            message: "Attach A Project MockUp Image '<img src=''>' ",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                }   else {
                    console.log("Please Attach Project MockUp Image!");
                    return false;
                }
            },
        },

        {
            type: "input",
            name: "deployedURL",
            message: "Enter Deployed Project URL",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                }   else {
                    console.log("Please Deployed Project URL!");
                    return false;
                }
            },
        },

        {
            type: "input",
            name: "github",
            message: "Enter GitHub Repository",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                }   else {
                    console.log("Please GitHub Repository!");
                    return false;
                }
            },
        },

        {
            type: "checkbox",
            name: "badge",
            message: "Select A Project License Badge",
            choices: [
                "",
                "",
                "",
            ]
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                }   else {
                    console.log("Please Select A Project License Badge!");
                    return false;
                }
            },
        },

    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions().then((data) => {
        writeToFile(data);
    });
}

// Function call to initialize app
init();

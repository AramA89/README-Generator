// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {writeFile} = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
            message: "Enter Project Contribution",
            
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
            type: "input",
            name: "email",
            message: "Please Enter Your e-mail",
            
        },

        {
            type: "checkbox",
            name: "badge",
            message: "Select A Project License Badge",
            choices: [
                "**Boost** [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](#license)",
                "**IBM** [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](#license)",
                "**MIT** [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)",
                "**Apache** [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](#license)"
            ],
           
        },
        {
            type: "checkbox",
            name: "license",
            message: "Select The License Corresponding To Chosen Badge",
            choices: [
                "**Boost** (https://www.boost.org/LICENSE_1_0.txt)",
                "**IBM** (https://opensource.org/licenses/IPL-1.0)",
                "**MIT** (https://opensource.org/licenses/MIT)",
                "**Apache** (https://opensource.org/licenses/Apache-2.0)"
            ],
           
        },

    ]);
}


// TODO: Create a function to initialize app
function init() {
    questions().then((data) => {
        writeFile(data);
    });
}
     
// Function call to initialize app
init();


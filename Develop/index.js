// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Name",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "Describe your project.",
  },
  {
    type: "input",
    name: "Installation",
    message: "Please enter installation instructions for your users.",
  },
  {
    type: "input",
    name: "Usage",
    message: "Please provide usage information for your users.",
  },
  {
    type: "input",
    name: "License",
    message: "What license is used for your project?",
    choices: ["MIT", "Apache", "Mozilla", "Unilicense", "GNU"],
  },
  {
    type: "input",
    name: "Contributing",
    message: "Please enter contribution guidelines for your users.",
  },
  {
    type: "input",
    name: "Tests",
    message: "Please enter test instructions for your users.",
  },
  {
    type: "input",
    name: "Username",
    message: "Please enter your GitHub username.",
  },
  {
    type: "input",
    name: "Email",
    message: "Please enter your email address.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

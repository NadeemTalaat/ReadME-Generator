const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter installation instructions for your users.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information for your users.",
  },
  {
    type: "list",
    name: "license",
    message: "What license is used for your project?",
    choices: ["MIT", "Apache", "Mozilla", "Unilicense", "GNU"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter contribution guidelines for your users.",
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter test instructions for your users.",
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address.",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.error(err)
      : console.log("ReadME.md file generated! Please see 'Results' folder.")
  );
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("./Results/GeneratedReadME.MD", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();

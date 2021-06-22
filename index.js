// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name? (Required)',
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your name!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    },
  },
  {
    type: 'input',
    message: 'What is the name of your project? (Required)',
    name: 'title',
    validate: (title) => {
      if (title) {
        return true;
      } else {
        console.log('You need to enter a project name!');
        return false;
      }
    },
  },

  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your project? (Required)',
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log('You need to enter a project name!');
        return false;
      }
    },
  },

  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your app',
    validate: (installation) => {
      if (installation) {
        return true;
      } else {
        console.log('I need to have a value!');
        return false;
      }
    },
  },
  {
    type: 'list',
    name: 'license',
    message: 'What is the License of this project? ',
    choices: ['MIT', 'Apache2.0', 'GPL3.0', 'BSD2Clause'],
  },
  {
    type: 'input',
    name: 'instruction',
    message: 'instruction to be follow?',
    validate: (instruction) => {
      if (instruction) {
        return true;
      } else {
        console.log('I need to have a value!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'usage',
    message: 'how do you use your app?',
    validate: (usage) => {
      if (usage) {
        return true;
      } else {
        console.log('I need to have a value!');
        return false;
      }
    },
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    fs.writeFileSync(
      path.join(__dirname, 'README.md'),
      generateMarkdown(answers)
    );
  });
}

// Function call to initialize app
init();

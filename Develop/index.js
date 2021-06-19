// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown=require("./utils/generateMarkdown");
const util=require('util');

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
          
          type:'input',
          message='What is the name of your project? (Required)',
          name:'title',
          validate:(title)=>{
              if(title){
                  return true;
              }
              else{
                console.log('You need to enter a project name!');
                  return false;
              }
          }
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
          type:'input',
          name:'usage',
          message:'how do you use your app?',
          validate: (usage) => {
            if (usage) {
              return true;
            } else {
              console.log('I need to have a value!');
              return false;
            }
          },
      },
     

    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,function(err){
        if(err){
            return console.log(err)
        }
        else{
            console.log("success") 
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data=>{
        writeToFile("READE.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();

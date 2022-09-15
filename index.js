const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML")
const questions = [
    {
       
    },
    {
       
    }
]

// function to create html file for team
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>
        (err) ? console.log("error") : console.log("HTML File Generated")
    )
}

// function to use inquirer to get user input at start
function init() {
    inquirer.prompt (questions)
    .then((answers)=>{
        const htmlOutput = generateHTML(answers)
        writeToFile("team.html", htmlOutput)
    })
}

// Function call to initialize app
init();
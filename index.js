const inquirer = require("inquirer");
const fs = require("fs");
const renderEmployeeCards = require("./src/generateHTML")[0];

const employeeArray = [];

const questions = [
  {
    type: "input",
    name: "name",
    message: "what is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "what is your employee id?",
  },
  {
    type: "input",
    name: "email",
    message: "what is your email?",
    validate: function (input) {
      {
        validEmail =
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            input
          );

        if (validEmail) {
          return true;
        } else {
          console.log(" Invalid email address");
          return false;
        }
      }
    },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "what is your office number?",
  },
  {
    type: "list",
    name: "typeEmployee",
    message: "what type of employee would you like to add?",
    choices: ["Engineer", "Intern", "No More Employees"],
  },
];

async function init() {
  let questioning = true;

  while (questioning) {
    const answers = await inquirer.prompt(questions);

    if (answers.typeEmployee === "No More Employees") {
      questioning = false;
    }

    if (answers.typeEmployee === "Engineer") {
      questions.splice(3, 1, {
        type: "input",
        name: "github",
        message: "what is your github username?",
      });
    }

    if (answers.typeEmployee === "Intern") {
      questions.splice(3, 1, {
        type: "input",
        name: "school",
        message: "what is the name of your school?",
      });
    }

    employeeArray.push(answers);
  }

  const htmlOutput = renderEmployeeCards(employeeArray);
  writeToFile("./dist/team.html", htmlOutput);
}

// creates html file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log("error") : console.log("HTML File Generated")
  );
}
// starts the application
init();

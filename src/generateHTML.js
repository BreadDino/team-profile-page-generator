const { default: ListPrompt } = require("inquirer/lib/prompts/list"); //? what is this?
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function renderEmployeeCards(employeeArray) {
  const answerArray = employeeArray;

  const htmlOutputArray = [];

  // functions that check if the objects exist
  const testManager = (answer) => (answer.officeNumber ? true : false);

  const testEngineer = (answer) => (answer.github ? true : false);

  const testIntern = (answer) => (answer.school ? true : false);

  // checks the array for specific objects and sorts which employee they are
  const managerArray = answerArray
    .filter(testManager)
    .map((item) => new Manager(item));

  const engineerArray = answerArray
    .filter(testEngineer)
    .map((item) => new Engineer(item));

  const internArray = answerArray
    .filter(testIntern)
    .map((item) => new Intern(item));

  // creates cards for each type of employee
  // manager card
  managerArray.forEach(function (answers) {
    let managerCard = `<article class="col mb-4">
                <div class="card">
                    <div class="card-header text-center bg-blue">
                        <h4 class="card-title">${answers.name.name}</h4>
                        <h5><i class="fa-solid fa-mug-hot"></i> Manager</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID : ${answers.name.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${answers.name.email}">${answers.name.email}</a></li>
                            <li class="list-group-item">Office number : ${answers.name.officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </article>`;

    htmlOutputArray.push(managerCard);
  });
  // engineer card
  engineerArray.forEach(function (answers) {
    let engineerCard = `<article class="col mb-4">
                <div class="card">
                    <div class="card-header text-center bg-blue">
                        <h4 class="card-title">${answers.name.name}</h4>
                        <h5><i class="fa-solid fa-gears"></i> Engineer</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID : ${answers.name.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${answers.name.email}">${answers.name.email}</a></li>
                            <li class="list-group-item">GitHub : <a href="https://github.com/${answers.name.github}" target="_blank" rel="noopener noreferrer">${answers.name.github}</a></li>
                        </ul>
                    </div>
                </div>
            </article> `;

    htmlOutputArray.push(engineerCard);
  });
// intern card
  internArray.forEach(function (answers) {
    let internCard = `<article class="col mb-4">
                <div class="card">
                    <div class="card-header text-center bg-blue">
                        <h4 class="card-title">${answers.name.name}</h4>
                        <h5><i class="fa-solid fa-user-graduate"></i> Intern</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID : ${answers.name.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${answers.name.email}">${answers.name.email}</a></li>
                            <li class="list-group-item">School : ${answers.name.school}</li>
                        </ul>
                    </div>
                </div>
            </article>`;

    htmlOutputArray.push(internCard);
  });

  return generateHTML(htmlOutputArray.join());
}

// returns html page
function generateHTML(htmloutput) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <title>Document</title>
    </head>
    <body class="bg-dark">
        <header class="jumbotron mb-3 bg-purple">
            <h1 class="display-4 d-flex justify-content-center">My Team Profile</h1>
        </header>
    
        <main class="mx-3">
            <section class="row row-cols-1 row-cols-md-3">
                
            ${htmloutput}
                
            </section>
    
        </main>
    
        <!-- Links -->
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    </body>
    </html>`;
}
// sends back to index
module.exports = [renderEmployeeCards, generateHTML];

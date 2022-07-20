const inquirer = require('inquirer');
const fs = require('fs');
const theAssignedTeam = [];
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const questionsManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your team managers name?',

        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?',

        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",

        },
        {
            type: "input",
            name: "number",
            message: "What is your office number?",

        },
        // {
        //     type: 'list',
        //     message: 'Would you like to add an engineer or intern?',
        //     name: 'addEmployee',
        //     choices: ["Engineer",
        //         "Intern"
        //     ]
        // }
    ])
        .then(answers => {
            console.log(answers);
            const manager = new Manager(answers.name, answers.id, answers.email, answers.number);
            theAssignedTeam.push(manager);
            promptTeambuild();
        })
};

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'id',
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "gitHub"
        },
    ])
        .then(answers => {
            console.log(answers);
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
            theAssignedTeam.push(engineer);
            promptTeambuild();
        })
};

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'id',
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your school name?",
            name: "school"
        },

    ])
        .then(answers => {
            console.log(answers);
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            theAssignedTeam.push(intern);
            promptTeambuild();
        })
};


// inquirer.prompt(questionsManager)
//     .then((answers) => {
//         console.log(answers)

//         if (answers.addEmployee === "Engineer") {
//             inquirer.prompt(engineerQuestions)
//             .then((answers) => {
//                 console.log(answers)
//             })
//         } else if (answers.addEmployee === "Intern") {
//             inquirer.prompt(internQuestions)
//             .then((answers) => {
//                 console.log(answers)
//             })
//         }
//     });
const promptTeambuild = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "Please select one of the following to add to your team:",
            choices: ["engineer", "intern", "finished team setup"]
        }
    ])

    // prompt different questions based on answers to initialQuesitons
        .then(userChoice => {
            switch (userChoice.menu) {
                case "engineer":
                    engineerQuestions();
                    break;
                case "intern":
                    internQuestions();
                    break;
                // need a function to put your team choices below
                default:
                    finishedTeam();
            }

        });
};
const finishedTeam = () => {
    console.log("Your Team is Ready!");

    // document.createElement("div")
    fs.writeFileSync("dist/index.html", siteCreator(theAssignedTeam), "utf-8");
}

questionsManager()






//webpage for creating cards

const siteCreator = (theAssignedTeam) => {

    function engineerHtml(data) {
        htmlData = []
        for (let i = 0; i < data.length; i++) {
            htmlData.push(`<div class="col container-md bg-secondary">
            <section>Name:${data[i].name}</section>
            <section>Job Title:Engineer</section>
            <section>id:${data[i].id}</section>
            <section>email:${data[i].email}</section>
            <section>Github account: ${data[i].gitHub}</section>
          </div>`)

        }
        return htmlData.join("")
    };
    function internHtml(data) {
        htmlData = []
        for (let i = 0; i < data.length; i++) {
            htmlData.push(`<div class="col container-md bg-secondary">
            <section>Name:${data[i].name}</section>
            <section>Job Title:Intern</section>
            <section>id:${data[i].id}</section>
            <section>email:${data[i].email}</section>
            <section>School: ${data[i].school}</section>
          </div>`)

        }
        return htmlData.join("")
    }
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </head>
        <body>
        <div class="w-100 p-3"></div>
        <nav class="container-xl p-3 mb-2 bg-secondary text-dark text-center fs-1">Team Profile Generator</nav>
        <div class="container-lg">
            <div class="row">
              <iv class="border border-dark col p-5 container-md bg-$white">
                    <section>Name:${theAssignedTeam[0].name}</section>
                    <section>Job Title:Manager</section>
                    <section>Id:${theAssignedTeam[0].id}</section>
                    <section>email:${theAssignedTeam[0].email}</section>
                    <section>Office Number:${theAssignedTeam[0].officeNumber}</section>
                  <div class="border border-dark col p-5 container-md bg-$white">
                 ${engineerHtml(theAssignedTeam.filter(emp => emp.getRole() === "Engineer"))}
                 <div class="border border-dark col p-5 container-md bg-$white">
                 ${internHtml(theAssignedTeam.filter(emp => emp.getRole() === "Intern"))}
                </div>
              </div>
        
              <footer></footer>
        
        </body>
        </html>`
}
module.exports = siteCreator   
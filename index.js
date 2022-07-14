const inquirer = require('inquirer');
const fs = require('fs');
const teamGenerator = require("./teamGenerator.js");
const theAssignedTeam = [];
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const questionsManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your team managers name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'ID',
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "number"
        },
        {
            type: 'list',
            message: 'Would you like to add an engineer or intern?',
            name: 'addEmployee',
            choices: ["Engineer",
                "Intern"
            ]
        }
    ])
        .then(answers => {
            console.log(answers);
            const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.GitHubUser);
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
            name: 'ID',
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your school name?",
            name: "schoolName"
        },

    ])
        .then(answers => {
            console.log(answers);
            const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
            theAssignedTeam.push(intern);
            promptTeambuild();
        })
};

const finishedTeam = () => {

}

inquirer.prompt(managerQuestions)
    .then((answers) => {
        console.log(answers)

        if (answers.addEmployee === "Engineer") {
            inquirer.prompt(engineerQuestions)
            .then((answers) => {
                console.log(answers)
            })
        } else if (answers.addEmployee === "Intern") {
            inquirer.prompt(internQuestions)
            .then((answers) => {
                console.log(answers)
            })
        }
    });
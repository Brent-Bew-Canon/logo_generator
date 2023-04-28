
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

const shapes = require("./lib/shapes")
const fs = require('fs');
const inquirer = require('inquirer');

// Array of prompts for the logo generator
const questions = [
    {
        type: 'input',
        message: 'Type Up To Three Characters To Include In Your Logo:',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What Color Do You Want Your Text To Be?',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Select A Shape:',
        choices: ["Circle", "Triangle", "Square"],
        name: 'shape'

    },
    {
        type: 'input',
        message: 'What Color Do You Want Your Logo To Be?',
        name: 'logoColor',
    }
];

//Launches inquirer prompts to get user input and passes it to the makeLogo function
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            if (response.text.length > 3 || response.text.length < 0) {
                throw new Error("Logo Text Must Be Between 1 and 3 Characters")
            }
            shapes.makeLogo(response.text, response.textColor, response.shape, response.logoColor)
        })
        .catch(err => console.log(err));
}

// Function call to initialize app
init(); 
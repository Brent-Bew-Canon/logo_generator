// AS a freelance web developer
// I WANT to generate a simple logo for my projects
// SO THAT I don't have to pay a graphic designer

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

const shapes = require("./lib/shapes.js")
const fs = require('fs');
const inquirer = require('inquirer');



// Array of prompts for the logo generator
const questions = [
    {
        type: 'input',
        message: 'What Characters Do You Want In Your Logo?',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What Color Do You Want Your Text To Be?',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'What type of license does this application have?',
        choices: ["Circle", "Triangle", "Square"],
        name: 'shape'

    },
    {
        type: 'input',
        message: 'What Color Do You Want Your Logo To Be?',
        name: 'logoColor',
    }
    // {
    //     type: 'list',
    //     message: 'What type of license does this application have?',
    //     choices: generate.licenses,
    //     name: 'license'

    // }
];

function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response);
            // const htmlContent = generate.generateMarkdown(response);
            // writeToFile("README-Copy.md", htmlContent);
        });

    // Writes the README file
    // function writeToFile(fileName, data) {
    //     fs.writeFile(fileName, data, err => {
    //         if (err) {
    //             console.error("There's been an error: " + err)
    //         }
    //     })
    // }
}

// Function call to initialize app
init(); 
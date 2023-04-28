const fs = require('fs');
const shapeClass = require("./render-shapes.js")
let logo = null;

//Main function to create the SVG logo
function makeLogo(text, textColor, shape, logoColor) {
    //Creates new class of selected shape
    switch (shape) {
        case "Square":
            logo = new shapeClass.Square(text, textColor, logoColor);
            break;
        case "Circle":
            logo = new shapeClass.Circle(text, textColor, logoColor);
            break;
        case "Triangle":
            logo = new shapeClass.Triangle(text, textColor, logoColor);
            break;
        default:
            console.error("No Shape Match");
    }

    shaper(logo.renderShape(), logo.renderText())

    //Creates the logo.svg file with the given parameters
    fs.writeFile("./lib/logo.svg", svgElem, err => {
        if (err) {
            console.error(err);
        }
        else {
            console.log("Generated logo.svg")
        }
    })
}

//Puts the svg code together to create the svg
function shaper(shape, text) {
    svgElem = `<svg viewBox="0 10 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        ${shape}
        ${text}
</svg >
    `
}

module.exports = { makeLogo }
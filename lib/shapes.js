const fs = require('fs');
const shapeClass = require("./render-shapes.js")
let logo = null;
// svgShapes = [
//     {
//         shape: "square",
//         draw: '<rect x="10" y="10" width="80" height="80" stroke="black" fill="" stroke-width="5" />'
//     },
//     {
//         shape: "circle",
//         draw: `<circle cx="50" cy="50" r="30" fill="aliceblue" />
//         <text x="33" y="55" fill="${textColor}" font-size="20">edx</text>`
//     },
//     {
//         shape: "triangle",
//         draw: `<polygon points="50 15, 100 100, 0 100"/>
//         <text x="33" y="78" fill="aqua" font-size="20">edx</text>`
//     }
// ]


function makeLogo(text, textColor, shape, logoColor) {
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
    fs.writeFile("./lib/logo.svg", svgElem, err => {
        if (err) {
            console.error(err);
        }
    }
    )
}

function shaper(shape, text) {
    svgElem = `<svg viewBox="0 10 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        ${shape}
        ${text}
</svg >
    `
}

module.exports = { makeLogo }
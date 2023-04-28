const fs = require('fs');

svgShapes = [
    {
        shape: "square",
        draw: '<rect x="10" y="10" width="80" height="80" stroke="black" fill="" stroke-width="5" />'
    },
    {
        shape: "circle",
        draw: `<circle cx="50" cy="50" r="30" fill="aliceblue" />
        <text x="33" y="55" fill="${textColor}" font-size="20">edx</text>`
    },
    {
        shape: "triangle",
        draw: `<polygon points="50 15, 100 100, 0 100"/>
        <text x="33" y="78" fill="aqua" font-size="20">edx</text>`
    }
]


function makeLogo(text, textColor, shape, logoColor) {
    shaper(svgShapes[2].draw)
    fs.writeFile("./lib/logo.svg", svgElem, err => {
        if (err) {
            console.error(err);
        }
    }
    )
}

function shaper(shape) {
    svgElem = `< svg viewBox="0 10 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        ${shape}
</svg >
    `
}

module.exports = { makeLogo }
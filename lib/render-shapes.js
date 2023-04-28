//Class for squares
class Square {
    constructor(chars, textColor, color) {
        this.chars = chars;
        this.textColor = textColor.toLowerCase();
        this.color = color.toLowerCase();
    }

    renderShape() {
        return `<rect x="10" y="10" width="80" height="80"fill="${this.color}"/>`
    }
    renderText() {
        return `<text x="33" y="55" fill="${this.textColor}" font-size="20">${this.chars}</text>`
    }
    setColor(color) {
        this.color = color
    }
}

//Class for Circles
class Circle {
    constructor(chars, textColor, color) {
        this.chars = chars;
        this.textColor = textColor.toLowerCase();
        this.color = color.toLowerCase();
    }

    renderShape() {
        return `<circle cx="50" cy="50" r="30" fill="${this.color}"/>`
    }
    renderText() {
        return `<text x="33" y="55" fill="${this.textColor}" font-size="20">${this.chars}</text>`
    }
    setColor(color) {
        this.color = color
    }
}

//Class for Triangles
class Triangle {
    constructor(chars, textColor, color) {
        this.chars = chars;
        this.textColor = textColor.toLowerCase();
        this.color = color.toLowerCase();
    }

    renderShape() {
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.color}"/>`
    }
    renderText() {
        return `<text x="33" y="78" fill="${this.textColor}" font-size="20">${this.chars}</text>`
    }
    setColor(color) {
        this.color = color
    }
}

module.exports = {
    Square,
    Triangle, Circle
}

const shapeClass = require("./render-shapes.js")

//Tests that squares are rendered properly 
describe("shapeClass", () => {
    describe("renderShape", () => {
        it("should rend the square shape with the color set to blue", () => {
            const shape1 = new shapeClass.Square;
            shape1.setColor("blue");
            expect(shape1.renderShape()).toEqual(`<rect x="10" y="10" width="80" height="80"fill="blue"/>`);
        }
        )
    })
})

//Tests that circles are rendered properly 
describe("shapeClass", () => {
    describe("renderShape", () => {
        it("should rend the circle shape with the color set to blue", () => {
            const shape2 = new shapeClass.Circle;
            shape2.setColor("blue");
            expect(shape2.renderShape()).toEqual(`<circle cx="50" cy="50" r="30" fill="blue"/>`);
        }
        )
    })
})

//Tests that triangles are rendered properly 
describe("shapeClass", () => {
    describe("renderShape", () => {
        it("should rend the triangle shape with the color set to blue", () => {
            const shape3 = new shapeClass.Triangle;
            shape3.setColor("blue");
            expect(shape3.renderShape()).toEqual(`<polygon points="50 15, 100 100, 0 100" fill="blue"/>`);
        }
        )
    })
})
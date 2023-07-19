const {Circle, Square, Triangle} = require("./shapes")
const { promptUser } = require('./index');

describe('promptUser', () => {

describe('shapeColor', () => {
    it('should return a color keyword or hexidecimal', () => {
      const userInput = new promptUser();
      const color = 'blue';

      expect(userInput.shapeColor).toEqual(color);
    });
  });

  
});

describe('Shape rendering', () => {
  it('should render a Triangle with the correct color', () =>{
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
  });

  it('should render a Circle with the correct color', () =>{
const circle = new Circle();
shape.setColor("green");
expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="green" />')
});

it('should render a Square with the correct color', () =>{
const square = new Square();
shape.setColor("purple");
expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="purple" />');
})
});
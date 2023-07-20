const {Circle, Square, Triangle} = require("./shapes");


describe('Triangle Test', () => {
  it('test for a triangle with a pink background', () =>{
const shape = new Triangle("pink", "pop", "green");
shape.setshapeColor("pink");
expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="150,50 50,150 250,150" fill="pink" /><text x="150" y="130" text-anchor="middle" fill="green">pop</text></svg>`)
  })});

  describe('Circle Test', () => {
  it('test for a circle with a green background', () =>{
const shape = new Circle("green", "wow", "yellow");
shape.setshapeColor("green");
expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="50" fill="green" /><text x="150" y="100" text-anchor="middle" fill="yellow">wow</text></svg>`)
})});

describe('Square Test', () => {
it('test for a square with a purple background', () =>{
const shape = new Square("purple", "abc", "black");
shape.setshapeColor("purple");
expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="50" y="50" width="200" height="100" fill="purple" /><text x="150" y="100" text-anchor="middle" fill="black">abc</text></svg>`);
})});



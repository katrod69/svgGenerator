
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle } = require('./lib/shapes');

function writeToFile(filename, content)
{
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}

function promptUser(){
inquirer
  .prompt([
    {
      type: "list",
      message: "Choose a shape",
      name: "shape",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Choose a color for your shape (color keyword or hexidecimal)",
    },
    {
      type: "input",
      name: "text",
      message: "Choose three characters",
      validate: function (value) {
        if (value.length === 3) {
            return true;
        }
        return "please enter exactly three characters";
    },
    },
    {
      type: "input",
      name: "textColor",
      message: "Choose your text color (color keyword or hexidecimal)",
    },

  ])
  
 
  .then((answers) => {
    const {shape, shapeColor, text, textColor} = answers;
    let selectedShape;
    
    switch (shape){
        case "Circle":
            selectedShape = new Circle(  shapeColor, text, textColor);
            break;
            case "Square":
                selectedShape = new Square(shapeColor, text, textColor);
            break;
            case "Triangle":
                selectedShape = new Triangle(shapeColor, text, textColor);
            break;
    }
           
            const svgContent = selectedShape.render();
            writeToFile("logo.svg", svgContent.toString());
        });
}
  

    promptUser();
    module.exports = {Circle, Square, Triangle};
// parent class of shapes

const inquirer = require('inquirer');
const fs = require('fs');

class Shape {
    constructor(shapeColor){
        this.shapeColor = shapeColor;
    }
    }
// extending classes to include shape choice for ui
class Square extends Shape {
    constructor(shapeColor, text, textColor) { 
        super(shapeColor); 
        this.text = text;
        this.textColor = textColor;
    }
        render() {
            return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />
            <text x="150" y="100" text-anchor="middle" fill="${this.textColor}">
              ${this.text}
            </text>
          </svg>`;
        };
    }

    class Circle extends Shape {
        constructor(shapeColor, text, textColor){
            super(shapeColor);
            this.text= text;
            this.textColor = textColor;
         }
            render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />
    <text x="150" y="100" text-anchor="middle" fill="${this.textColor}">
      ${this.text}
    </text>
  </svg>`;
            }
        }

        class Triangle extends Shape {
            constructor(shapeColor, text, textColor){
            super(shapeColor);
            this.text = text;
            this.textColor =textColor;
        }
            render(){
                return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                <polygon points="150,50 50,150 250,150" fill="${this.shapeColor}" />
                <text x="150" y="130" text-anchor="middle" fill="${this.textColor}">
                  ${this.text}
                </text>
              </svg>`;
            }
            }


      

module.exports = {Circle, Square, Triangle};
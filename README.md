# beautiful-calculator
A beautiful arithmetic calculator that can perform addition, subtraction, multiplication, and division of two numbers. Below is a Demo and how to understand the code.

### Demo

Click [here](https://wellfc.github.io/beautiful-calculator/) to test the application.

<img src="https://img.shields.io/badge/web-html-informational?style=for-the-badge&logo=html5&logoColor=white&color=2aa889"/>&nbsp;
<img src="https://img.shields.io/badge/web-css-informational?style=for-the-badge&logo=css3&logoColor=white&color=2aa889"/>&nbsp;
<img src="https://img.shields.io/badge/code-javascript-informational?style=for-the-badge&logo=javascript&logoColor=white&color=2aa889"/>&nbsp;

## HTML
This is the web page structure. It contains the calculator interface, including 
the numbers from 0 to 9, four buttons for basic arithmetic operations, and an input field 
to display the result. It also includes a `script` tag to include the JavaScript file, "index.js."

```HTML
<main>
  <div class="calculator-container">
    <h1>Arithmetic Calculator</h1>
    <form action="" name="calculator">
      <input type="text" name="display" class="display"><br>
      <input class="btn" type="button" value="7">
      <input class="btn" type="button" value="8">
      <input class="btn" type="button" value="9">
      <input class="btn" type="button" value="C"><br>
      <input class="btn" type="button" value="4">
      <input class="btn" type="button" value="5">
      <input class="btn" type="button" value="6">
      <input class="btn" type="button" value="*"><br>
      <input class="btn" type="button" value="1">
      <input class="btn" type="button" value="2">
      <input class="btn" type="button" value="3">
      <input class="btn" type="button" value="/"><br>
      <input class="btn" type="button" value="-">
      <input class="btn" type="button" value="0">
      <input class="btn" type="button" value="+">
      <input class="btn" type="button" value="=">
    </form>
  </div>
</main>
```
The HTML code defines the structure of the page. It includes the following elements:

* A `main` element. This element will contain the calculator itself.
* A `div` element with the class `calculator-container`. This element will contain the input fields and buttons for the calculator.
* A `h1` element with the text "Arithmetic Calculator". This element will be the title of the calculator.
* Four `button` elements. These elements will be used to perform the arithmetic operations.
* An `input` element with the class `display`. This element will display the result of the calculation.

## CSS
The CSS file provides styling for your calculator. It sets the background color, text color, 
fonts, and styles for various HTML elements to make the calculator visually appealing.

It includes the following rules:

* All elements should have a margin and padding of 0.
* The body should have a background color of #011627 and a color of #fdfffc.
```CSS
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 font-family: Arial, sans-serif;
}
 
body {
 background-color: #011627;
 color: #fdfffc;
 text-align: center;
}
```
The following rules are used to center the carculator:
* The main element should have a height of 100% and a display of grid.
```CSS
main {
  height: 100dvh;
  display: grid;
  place-items: center;
}
```
The following rules are used to set the style of the display:

```CSS
.display {
  width: 370px;
  height: 70px;
  padding: 0 10px;
  background-color: #4c555c;
  color: #fff;
  text-align: right;
}
```
The following rules are used to set the style of the buttons:

```CSS
input{
  width: 75px;
  height: 50px;
  font-size: 45px;
  border-radius: 10px;
  margin: 10px;
  background-color: #fff;
  color: #000;
  border-style: none;

}

.btn:hover{
  background-color:#ffff00;
  cursor: pointer;
}
```

## JavaScript

The JavaScript code defines the behavior of the page. It includes the following utility functions:

* `onEvent()`: This function attaches an event listener to an element.
* `select()`: This function returns the first element that matches a given selector.
* `selectAll()`: This function performs the addition operation.


It does the following:
* It defines two utility functions, onEvent, select and selectAll, which simplify event handling and DOM element selection.
  The `onEvent()` function is used to attach event listeners to the buttons.
```javascript
// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}
```

* It selects the necessary HTML elements using their selector.
  The `select()` function is used to select elements by their class.
```javascript
/* Variables */
const display = select('.display');
const buttons = selectAll('.btn');
```

* It adds the click event listeners to all the buttons. When clicked,
  these buttons trigger corresponding functions that perform the arithmetic operations and update the result displayed
  in the readonly input field.
```javascript
/* Arithmetic Operations*/
buttons.forEach(button => {
  onEvent('click', button, () => {
    if (button.value === '=') {
      if (display.value !== '') {
        display.value = eval(display.value);
      }
    } else if (button.value === 'C') {
      display.value = '';
    } else {
      display.value += button.value;
    }
  });
});
```
  

## How to use the calculator

To use the calculator, click the first number, then the desired arithmetic operator and then click the second number. 
Then, click on the equal(=) button to perform the operation. The result will be displayed in the display field.

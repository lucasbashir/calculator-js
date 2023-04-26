// Get the display element
let display = document.getElementById('display');

// Initialize variables for memory, operator, and decimal
let memory = 0;
let operator = '';
let decimal = false;

// Function to clear the display and reset variables
function clearDisplay() {
  display.value = '';
  memory = 0;
  operator = '';
  decimal = false;
}

// Function to remove the last character from the display
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Function to insert a value into the display
function insert(value) {
  // If value is a decimal and a decimal has already been inserted, do nothing
  if (value === '.' && decimal) {
    return;
  }
  // If value is a decimal, set decimal to true
  if (value === '.') {
    decimal = true;
  }
  // Insert the value into the display
  display.value += value;
}

// Function to evaluate the expression in the display
function calculate() {
  let result = eval(display.value); // Use eval() to evaluate the expression
  display.value = result; // Set the display to the result
  memory = result; // Set memory to the result
  decimal = false; // Reset decimal
}

// Function to set the operator for the expression
function setOperator(value) {
  // If an operator is already set, evaluate the expression
  if (operator) {
    calculate();
  }
  // Set memory to the current value in the display
  memory = parseFloat(display.value);
  // Set the operator to the specified value
  operator = value;
  // Clear the display
  display.value = '';
  // Reset decimal
  decimal = false;
}

// Function to calculate the square root of the value in the display
function squareRoot() {
  let value = parseFloat(display.value);
  let result = Math.sqrt(value); // Use Math.sqrt() to calculate the square root
  display.value = result; // Set the display to the result
}

// Function to calculate the power of the value in the display
function power() {
  let value = parseFloat(display.value);
  let result = Math.pow(value, 2); // Use Math.pow() to calculate the power
  display.value = result; // Set the display to the result
}

// Function to calculate the logarithm of the value in the display
function logarithm() {
  let value = parseFloat(display.value);
  let result = Math.log10(value); // Use Math.log10() to calculate the logarithm
  display.value = result; // Set the display to the result
}

// Function to calculate the factorial of the value in the display
function factorial() {
  let value = parseInt(display.value);
  let result = 1;
  for (let i = 1; i <= value; i++) { // Use a loop to calculate the factorial
    result *= i;
  }
  display.value = result; // Set the display to the result
}

// Function to insert an opening parenthesis into the display
function insertParenthesis(opening) {
  display.value += opening;
}


function closeParenthesis() {
  let openingParenthesis = display.value.split('(').length - 1;
  let closingParenthesis = display.value.split(')').length - 1;
  if (closingParenthesis < openingParenthesis) {
    display.value += ')';
  }
}

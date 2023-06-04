let display = document.getElementById("display");
let dlt = document.getElementById("delete");
let clear = document.getElementById("clear");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");
let dot = document.getElementById(".");
let divide = document.getElementById("/");
let multiply = document.getElementById("*");
let subtract = document.getElementById("-");
let add = document.getElementById("+");
let enter = document.getElementById("enter");
let displayNumber = "0";
let variableOperator;
let operatorFlag;
let variableNumber;
let input = "0";
let userInput1;
let userInput2;

one.onclick = () => {
  variableNumber = "1";
  handleInputs();
};
two.onclick = () => {
  variableNumber = "2";
  handleInputs();
};
three.onclick = () => {
  variableNumber = "3";
  handleInputs();
};
four.onclick = () => {
  variableNumber = "4";
  handleInputs();
};
five.onclick = () => {
  variableNumber = "5";
  handleInputs();
};
six.onclick = () => {
  variableNumber = "6";
  handleInputs();
};
seven.onclick = () => {
  variableNumber = "7";
  handleInputs();
};
eight.onclick = () => {
  variableNumber = "8";
  handleInputs();
};
nine.onclick = () => {
  variableNumber = "9";
  handleInputs();
};
zero.onclick = () => {
  variableNumber = "0";
  handleInputs();
};
dot.onclick = () => {
  variableNumber = ".";
  handleInputs();
};

add.onclick = () => {
  if (operatorFlag) {
    return;
  }
  variableNumber = "+";
  variableOperator = "+";
  operatorFlag = true;
  handleInputs();
  insertInputs();
};

subtract.onclick = () => {
  if (operatorFlag) {
    return;
  }
  variableNumber = "-";
  variableOperator = "-";
  operatorFlag = true;
  handleInputs();
  insertInputs();
};

multiply.onclick = () => {
  if (operatorFlag) {
    return;
  }
  variableNumber = "*";
  variableOperator = "*";
  operatorFlag = true;
  handleInputs();
  insertInputs();
};

divide.onclick = () => {
  if (operatorFlag) {
    return;
  }
  variableNumber = "/";
  variableOperator = "/";
  operatorFlag = true;
  handleInputs();
  insertInputs();
};

clear.onclick = () => {
  clr();
};

dlt.onclick = () => {
  dltVariable();
};

enter.onclick = () => {
  insertInputs();
  calculate();
};

function handleInputs() {
  if (displayNumber === "0") {
    displayNumber = variableNumber;
    input = variableNumber;
  } else {
    displayNumber = displayNumber.concat(variableNumber);
    input = input.concat(variableNumber);
  }
  updateDisplay();
}

function updateDisplay() {
  display.innerHTML = displayNumber.toString();
}

function clr() {
  displayNumber = "0";
  input = "0";
  userInput1 = "";
  userInput2 = "";
  operatorFlag = false;
  updateDisplay();
}

function insertInputs() {
  if (userInput1 && userInput2) {
    calculate();
  } else if (userInput1) {
    userInput2 = parseFloat(input);
  } else {
    userInput1 = parseFloat(input);
  }
  input = "";
}

function calculate() {
  let result;
  switch (variableOperator) {
    case "+":
      result = userInput1 + userInput2;
      break;
    case "-":
      result = userInput1 - userInput2;
      break;
    case "*":
      result = userInput1 * userInput2;
      break;
    case "/":
      result = userInput1 / userInput2;
      break;
  }
  
  displayNumber = result;
  updateDisplay();
  variableOperator = "";
  operatorFlag = false;
}

function dltVariable() {
  displayNumber = displayNumber.slice(0, -1);
  input = input.slice(0, -1);
  if (displayNumber === "") {
    clr();
  }
  if(input === ""){
    input = displayNumber;
  }
  if (
    !displayNumber.includes("+") &&
    !displayNumber.includes("-") &&
    !displayNumber.includes("*") &&
    !displayNumber.includes("/")) {
    operatorFlag = false;
    userInput1 = "";
  }
  updateDisplay();
}

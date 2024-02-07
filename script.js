const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll(".Calculator button");

let currentNumber = "";
let previousNumber = null;
let operator = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      currentNumber = "";
      previousNumber = null;
      operator = null;
    } else if (value === "DEL") {
      currentNumber = currentNumber.slice(0, -1);
    }
    else if (value === "%") {
        if (currentNumber !== '') {
          currentNumber = parseFloat(currentNumber) /100 ;
        }
    // else if (value === "%") {
    //   if (currentNumber !== "") {
    //     previousNumber = parseFloat(currentNumber);
    //     operator = "%";
    //     currentNumber = "";
    //   }
    } else if (
      value === "/" ||
      value === "*" ||
      value === "-" ||
      value === "+"
    ) {
      previousNumber = currentNumber;
      currentNumber = "";
      operator = value;
    } else if (value === "=") {
      if (previousNumber !== null && operator !== null) {
        const calculatedNumber = performCalculation(
          previousNumber,
          currentNumber,
          operator
        );
        previousNumber = null;
        operator = null;
        currentNumber = calculatedNumber;
      }
    } else {
      currentNumber += value;
    }

    inputBox.value = currentNumber;
  });
});

function performCalculation(num1, num2, op) {
  // Convert strings to numbers if necessary
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (op) {
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    case "+":
      return num1 + num2;
    // case "%":
    //   return (num1 / num2) * 100;
    default:
      return 0; // Handle invalid operator
  }
}

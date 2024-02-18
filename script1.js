const numbers = document.querySelectorAll(".numbers");
const result = document.querySelector(".result span");
const signs = document.querySelectorAll(".sign");
const percents = document.querySelector(".percent");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clears");
const negative = document.querySelector(".negative");

let firstvalue = "";
let isFirstValue = false;
let secondvalue = "";
let isScondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    let atr = e.target.getAttribute("value");
    if (isFirstValue === false) {
      getFirstValue(atr);
    }
    if (isScondValue === false) {
      getSecondValue(atr);
    }
  });
}

function getFirstValue(el) {
  result.innerHTML = "";
  firstvalue += el;
  result.innerHTML = firstvalue;
  firstvalue = +firstvalue;
}

function getSecondValue(el) {
  if (firstvalue != "" && sign != "") {
    secondvalue += el;
    result.innerHTML = secondvalue;
    secondvalue = +secondvalue;
  }
}
function getsign() {
  for (let i = 0; i < signs.length; i++) {
    signs[i].addEventListener("click", (e) => {
      sign = e.target.getAttribute("value");
      isFirstValue = true;
    });
  }
}
getsign();
equal.addEventListener("click", () => {
  result.innerHTML = "";
  if (sign === "+") {
    resultValue = firstvalue + secondvalue;
  } else if (sign === "-") {
    resultValue = firstvalue - secondvalue;
  } else if (sign === "*") {
    resultValue = firstvalue * secondvalue;
  } else if (sign === "/") {
    resultValue = firstvalue / secondvalue;
  }
  result.innerHTML = resultValue;
  firstvalue = resultValue;
  secondvalue = "";
});
function checkresultlenght() {
  resultValue = JSON.stringify(resultValue);
  if (resultValue.length >= 0) {
    resultValue = JSON.parse(resultValue);
    result.innerHTML = resultValue.toFixed(5);
  }
}
negative.addEventListener("click", () => {
  result.innerHTML = "";
  if (firstvalue != "") {
    // resultValue = firstvalue / 100;
    resultValue = -firstvalue;
    firstvalue = resultValue;
  }
  if (firstvalue != "" && secondvalue != "" && sign != "") {
    resultValue = -resultValue;
  }
  result.innerHTML = resultValue;
});

percents.addEventListener("click", () => {
  result.innerHTML = "";
  if (firstvalue != "") {
    resultValue = firstvalue / 100;
    firstvalue = resultValue;
  }
  if (firstvalue != "" && secondvalue != "" && sign != "") {
    resultValue = resultValue / 100;
  }
  result.innerHTML = resultValue;
});

clear.addEventListener("click", () => {
  result.innerHTML = 0;
  firstvalue = "";
  isFirstValue = false;
  secondvalue = "";
  isScondValue = false;
  sign = "";
  resultValue = 0;
});

// 1.1 Skriv funktionerna som anropas i myCalculator så att
// myCalculator kan fungera.

// 1.2 Gör om myCalculator så att den använder if och else

function myCalculator(operator, num1, num2) {
  switch (operator) {
    case "+":
      return myAddFunction(num1, num2);

    case "-":
      return mySubtractFunction(num1, num2);

    case "*":
      return myMultiplyFunction(num1, num2);

    case "/":
      return myDivisionFunction(num1, num2);

    default:
      return "Error operator not found!";
  }
}


function myAddFunction(num1, num2) {
  return num1 + num2;
}

function mySubtractFunction(num1, num2) {
  return num1 - num2;
}

function myMultiplyFunction(num1, num2) {
  return num1 * num2
}

function myDivisionFunction(num1, num2) {
  return num1 / num2
}

console.log(myAddFunction(1, 2))
console.log(mySubtractFunction(20, 89))
console.log(myMultiplyFunction(20, 89))
console.log(myDivisionFunction(20, 89))

// 1.2


if (operator == '+') {
    return myAddFunction(num1 + num2);
}
else if (operator == '-') {
  return mySubtractFunction(num1 - num2);
}
else if (operator == '*') {
  return myMultiplyFunction(num1 * num2);
}
else if (operator == '/') {
  return myDivisionFunction(num1 / num2);
}
else {
  return "Error operator not found!";
}




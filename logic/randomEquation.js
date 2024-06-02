export function randomNumber(x) {
  const min = x > 15 ? x - 15 : 2;
  const num = Math.floor(Math.random() * (x - min) + min);
  return num;
}

export function randomOperator(level) {
  const operators = ["+", "-", "*", "/"];
  if (level === "easy") {
    return operators[Math.floor(Math.random() * 2)];
  } else if (level === "medium") {
    return operators[Math.floor(Math.random() * 3)];
  } else if (level === "hard") {
    return operators[Math.floor(Math.random() * 4)];
  }
}

export function randomEquation(lNum1, lNum2, level) {
  const operator = randomOperator(level);

  let num1 =
    operator === "+" || operator === "-"
      ? randomNumber(lNum1 * 2)
      : randomNumber(lNum1);
  let num2 =
    operator === "+" || operator === "-"
      ? randomNumber(lNum2 * 2)
      : randomNumber(lNum2);

  if (operator === "-" && num1 < num2) {
    [num1, num2] = [num2, num1];
  }
  if (operator === "/" && num1 % num2 !== 0) {
    [num1, num2] = [num2, num1];
  }
  const equation = num1 + " " + operator + " " + num2;
  const result = eval(equation);
  return { equation, result };
}

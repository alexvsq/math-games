export function randomNumber(x) {
  const num = Math.floor(Math.random() * x + 1);
  return num;
}

export function randomOperator() {
  const operators = ["+", "-", "*", "/"];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
}

export function randomEquation(lNum1, lNum2, c) {
  const num1 = randomNumber(lNum1);
  const num2 = randomNumber(lNum2);
  const operator = randomOperator();
  const equation = num1 + operator + num2;
  const result = eval(equation);
  return { equation, result };
}

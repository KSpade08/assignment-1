// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req: any, res: any) => {
  const { num } = req.params;
  const parsedNum = parseInt(num);

  if (isNaN(parsedNum) || parsedNum < 0) {
    res.send(`fibonacci(${num}) is undefined`);
    return;
  }

  const fibN = fibonacci(parseInt(num));

  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};

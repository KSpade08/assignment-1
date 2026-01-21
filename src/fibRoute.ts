// Endpoint for querying the fibonacci numbers
import {Request, Response} from "express";
import fibonacci from "./fib";

const fibRoute = (req: Request, res: Response): void => {
  const { num } = req.params;
  //const parsedNum = parseInt(num, 10)
  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};

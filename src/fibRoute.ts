// Endpoint for querying the fibonacci numbers

import { Request, Response } from "express";
import fibonacci from "./fib";

const fibRoute = (req: Request, res: Response): void => {
  const num: string = req.params.num;

  const parsedNum: number = parseInt(num, 10);
  const fibN: number = fibonacci(parsedNum);

  let result: string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};

export default fibRoute;

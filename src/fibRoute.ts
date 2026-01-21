// Endpoint for querying the fibonacci numbers
import {Request, Response} from "express";
import fibonacci from "./fib";

const fibRoute = (req: Request, res: Response): void => {
  const { num } = req.params;
  const parsedNum = parseInt(num, 10)

  if(Number.isNaN(parsedNum)) {
    res.status(400).send("Invalid number parameter");
    return;
  }

  const fibN = fibonacci(parsedNum);
  const result = `fibonacci(${parsedNum}) is ${fibN}`;
  res.send(result);
};

export default fibRoute;
import * as JWT from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export type TokenSignBody = { id: number };
export const tokenSecretKey = "SOME SECRET KEY";

export const authenticationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized: Can not find available token",
    });
  }

  JWT.verify(token, tokenSecretKey, (err: any, decoded: unknown) => {
    const data = decoded as TokenSignBody;
    if (err) {
      res.status(401).end();
    } else {
      res.locals.userId = data.id;
      next();
    }
  });
};

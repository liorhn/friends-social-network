import * as JWT from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authenticationToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
  type TokenObject = { email: string; id: number };

  const key: string = "LH97";

  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "Unauthorized: Can not find available token", // CHANGE ALL STATUS TO RES.STATUS
    });
  }

  const verifyPromise = new Promise<TokenObject>((resolve, reject) => {
    JWT.verify(token, key, (err: any, decoded: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });

  verifyPromise
    .then((decoded) => {
      decoded.id;
      next();
    })
    .catch(() => {
      return res.status(401).json({
        status: 401,
        message: "Unauthorized: Invalid token",
      });
    });
};

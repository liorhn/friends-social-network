import { Express } from "express";
import { authenticationMiddleware } from "../middleware/authenticationMiddleware";


export const innitUserLoggedInCheckService = (app: Express) => {
  app.get("/v1/login-status", authenticationMiddleware, (req, res) => {
    res.status(200).send("OK");   
  }); 
};

import { Express } from "express";
import { authenticationMiddleware } from "../middleware/authenticationMiddleware";

export const initPostsService = (app: Express) => {
  app.post("/v1/posts", authenticationMiddleware, (req, res) => {
    
    console.log(res.locals.data);
    res.status(200).json({ status: 200, message: "Authenticated user" });
  });
};

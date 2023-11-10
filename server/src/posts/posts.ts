import { Express } from "express";
import { authenticationToken } from "../middleware/authenticationToken";

export const initPostsService = (app: Express) => {
  app.post("/v1/posts", authenticationToken, (req, res) => {
    
    res.status(200).json({ status: 200, message: "Authenticated user" });
  });
};

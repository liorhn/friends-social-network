import { Express } from "express";
import { Connection } from "mysql";

export const initSessionService = (app: Express, db: Connection) => {
  app.get("/v1/session", (req, res) => {
    res.send("Welcome to Login pagesadasd!");
  });
  console.log(db);
};

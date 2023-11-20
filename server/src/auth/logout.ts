import { Express } from "express";

export const initLogout = (app: Express) => {
  app.get("/v1/logout", (req, res) => {
    res.clearCookie("token", {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).send("Logged out successfully");
  });
};
    
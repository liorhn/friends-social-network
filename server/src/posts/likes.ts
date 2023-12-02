import { Express } from "express";
import { Connection } from "mysql";
import { authenticationMiddleware } from "../middleware/authenticationMiddleware";

export const initLikesService = (app: Express, db: Connection) => {
  app.post("/v1/posts/:postId/likes", authenticationMiddleware, (req, res) => {
    const body = req.body;
    const { postId, userId } = body;

    const query = `INSERT INTO likes (post_id, user_id) VALUES (?, ?)`;

    db.query(query, [postId, userId], (error) => {
      if (error) {
        return res.status(500).json({
          status: 500,
          error: "Failed to insert data",
        });
      } else {  
        return res.status(200);
      }
    });
  });

  app.put("/v1/posts/:postId/likes", authenticationMiddleware, (req, res) => {
    const body = req.body;
    const { postId, userId } = body;

    const deleteQuery = `DELETE FROM likes WHERE post_id = ? AND user_id = ?`;

    db.query(deleteQuery, [postId, userId], (error) => {  
      if (error) {
        return res.status(500).json({
          status: 500,
          error: "Failed to delete data",
        });
      } else {
        return res.status(200);
      }
    });
  });
};

import { Express } from "express";
import { Connection } from "mysql";
import { authenticationMiddleware } from "../middleware/authenticationMiddleware";

export const initCommentsService = (app: Express, db: Connection) => {
  app.post(
    "/v1/posts/:postId/comments",
    authenticationMiddleware,
    (req, res) => {
      const body = req.body;
      const { newComment, userId, postId } = body;

      const query = `INSERT INTO comments (comment, user_id ,post_id) VALUES (?, ?, ?)`;

      db.query(query, [newComment, userId, postId], (error) => {
        if (error) {
          return res.status(500).json({
            status: 500,
            error: "Failed to insert data",
          });
        } else {
          return res.status(200);
        }
      });
    }
  );
};

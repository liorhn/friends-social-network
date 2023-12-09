import { Express } from "express";
import { Connection } from "mysql";
import { authenticationMiddleware } from "../middleware/authenticationMiddleware";

export const initLikesService = (app: Express, db: Connection) => {
  app.post("/v1/posts/:postId/likes", authenticationMiddleware, (req, res) => {
    const userId = res.locals.userId;
    const postId = req.params.postId;
    
 // todo: postId validations
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

  app.delete("/v1/posts/:postId/likes", authenticationMiddleware, (req, res) => {
    const userId = res.locals.userId;
    const postId = req.params.postId;
    console.log(userId, postId);

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

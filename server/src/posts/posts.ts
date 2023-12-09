import { Express } from "express";
import { Connection } from "mysql";
import { authenticationMiddleware } from "../middleware/authenticationMiddleware";

export const initPostsService = (app: Express, db: Connection) => {
  app.post("/v1/posts", authenticationMiddleware, (req, res) => {
    const userId = res.locals.userId;
    const { postContent } = req.body;
    
    // todo: content validation
    const query = `INSERT INTO posts (content, user_id) VALUES (?, ?)`;

    db.query(query, [postContent, userId], (error) => {
      if (error) {
        return res.status(500).json({
          status: 500,
          error: "Failed to insert data",
        });
      } else {
        return res.status(200).json({
          status: 200,
        });
      }
    });
  });

  app.get("/v1/posts", authenticationMiddleware, (req, res) => {
    //todo: not is owner liked, is logged in user liked the post
    //
    const query = `
      SELECT 
      p.id,
      p.content,
      p.user_id,
      u.first_name,
      u.last_name,
      CASE WHEN l.user_id IS NOT NULL THEN 1 ELSE 0 END AS user_likes_post
    FROM posts p
    INNER JOIN users u ON p.user_id = u.id
    LEFT JOIN likes l ON p.id = l.post_id AND l.user_id = u.id  
    `;

    db.query(query, (error, result) => {
      if (error) {
        res.status(500).json({ error: "SQL Error" });
      } else {
        res.status(200).json({
          result,
        });
      }
    });
  });
};

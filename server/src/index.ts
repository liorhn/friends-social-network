import * as express from "express";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import { initUsersService } from "./users/users";
import { initSessionService } from "./session/session";
import { initDatabase } from "./database/db";
import { initPostsService } from "./feed/posts";
import { innitUserLoggedInCheckService } from "./auth/userLoggedInCheck";
import { initLogout } from "./auth/logout";
import { initLikesService } from "./feed/likes";
import { initCommentsService } from "./feed/comments";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

const db = initDatabase();
initUsersService(app, db);
initSessionService(app, db);
initPostsService(app, db);
initLikesService(app, db);  
initCommentsService(app, db);
innitUserLoggedInCheckService(app); 
initLogout(app);

app.listen(4000, () => {
  console.log("Running on server 4000!");
});

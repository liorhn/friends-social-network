import * as express from "express";
import * as cors from "cors";
import { initUsersService } from "./users/users";
import { initSessionService } from "./session/session";
import { initDatabase } from "./database/db";
import { initPostsService } from "./posts/posts";
import * as cookieParser from 'cookie-parser';

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',  
  credentials: true,  
}));
app.use(cookieParser());
app.use(express.json());

const db = initDatabase();
initUsersService(app, db);
initSessionService(app, db);
initPostsService(app);

app.listen(4000, () => {
  console.log("Running on server 4000!");
});

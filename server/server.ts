import express, { Express } from "express";
import dotenv from "dotenv";
import router from "./routes/test.routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

router(app);

app.listen(port, () => {
    console.log(`[server]: Server is listening on port ${port}!`);
});

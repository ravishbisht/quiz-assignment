import express from "express";
import { router } from "./route/quiz.route.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", router);

const PORT = 3000;

app.listen(3000, () => {
  console.log(`app running successfully at port ${PORT}`);
});

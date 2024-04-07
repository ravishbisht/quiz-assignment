import express from "express";
import { getQuiz } from "../controller/quiz.controller.js";

const router = express.Router();

router.route("/getQuiz").get(getQuiz);
// router.route("/postQuiz").post(postQuiz);

export { router };

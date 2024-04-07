import { data } from "../utils/questions.js";

const getQuiz = (req, res) => {
  try {
    return res.status(200).json(data);
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({
      error: error || "Internal sever error",
      success: false,
    });
  }
};

// const postQuiz = (req, res) => {
//   try {
//     const selectedOption = req.body;
//     console.log("frontend data", selectedOption);
//     let score = 0;
//     let correctOpt;
//     data[selectedOption.index].answer.map((e) => {
//       if (e.text === selectedOption.selectedOption) {
//         if (e.correct) {
//           score = score + 1;
//         }
//       }
//       if (e.correct) {
//         correctOpt = e;
//       }
//     });
//     return res.status(200).json({ score, correctOpt });
//   } catch (error) {
//     console.log("error: ", error);
//   }
// };

export { getQuiz };

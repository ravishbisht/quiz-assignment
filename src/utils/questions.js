export const data = [
  {
    id: 1,
    question: "What is the purpose of the `require()` function in Node.js?",
    answer: [
      { text: "To include external libraries and modules", correct: true },
      { text: "To create a new event loop", correct: false },
      { text: "To define callback functions", correct: false },
      { text: "To manipulate the DOM", correct: false },
    ],
  },
  {
    id: 2,
    question: "Which of the following is a core module in Node.js?",
    answer: [
      { text: "http", correct: true },
      { text: "express", correct: false },
      { text: "mongoose", correct: false },
      { text: "sequelize", correct: false },
    ],
  },
  {
    id: 3,
    question: "What is the role of the event loop in Node.js?",
    answer: [
      { text: "To handle asynchronous operations", correct: true },
      { text: "To execute synchronous code", correct: false },
      { text: "To manage database connections", correct: false },
      { text: "To parse JSON data", correct: false },
    ],
  },
  {
    id: 4,
    question: "What is a callback function in Node.js?",
    answer: [
      { text: "A function that executes immediately", correct: false },
      {
        text: "A function passed as an argument to another function, to be called later",
        correct: true,
      },
      { text: "A function used for error handling", correct: false },
      { text: "A function that runs in a separate thread", correct: false },
    ],
  },
  {
    id: 5,
    question: "Which method is used to register event listeners in Node.js?",
    answer: [
      { text: "addEvent()", correct: false },
      { text: "listen()", correct: false },
      { text: "on()", correct: true },
      { text: "addEventListener()", correct: false },
    ],
  },
  {
    id: 6,
    question: "What is the purpose of the `fs` module in Node.js?",
    answer: [
      { text: "To interact with the file system", correct: true },
      { text: "To handle HTTP requests", correct: false },
      { text: "To create a web server", correct: false },
      { text: "To perform mathematical operations", correct: false },
    ],
  },
  {
    id: 7,
    question: "What is the role of middleware in Express.js?",
    answer: [
      { text: "To serve static files", correct: false },
      { text: "To handle HTTP requests and responses", correct: true },
      { text: "To manage database connections", correct: false },
      { text: "To define routes", correct: false },
    ],
  },
  {
    id: 8,
    question:
      "What does the term 'non-blocking I/O' mean in the context of Node.js?",
    answer: [
      { text: "I/O operations that block the event loop", correct: false },
      {
        text: "I/O operations that do not block the event loop",
        correct: true,
      },
      { text: "Synchronous I/O operations", correct: false },
      { text: "Asynchronous I/O operations", correct: false },
    ],
  },
  {
    id: 9,
    question: "What is the purpose of the `process` object in Node.js?",
    answer: [
      { text: "To handle HTTP requests", correct: false },
      { text: "To manage child processes", correct: true },
      { text: "To interact with the file system", correct: false },
      { text: "To parse JSON data", correct: false },
    ],
  },
  {
    id: 10,
    question: "What is the main advantage of using streams in Node.js?",
    answer: [
      { text: "They simplify error handling", correct: false },
      {
        text: "They allow for efficient processing of large amounts of data",
        correct: true,
      },
      {
        text: "They provide a way to create child processes",
        correct: false,
      },
      {
        text: "They enable real-time communication between clients and servers",
        correct: false,
      },
    ],
  },
];

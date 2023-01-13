// Question added with boolean to check if the answers are correct or incorrect
var quiz = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<src>", correct: false },
      { text: "<script?", correct: true }
    ]
    // Trivia: The <script> tag is used to contain javascript code.
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      { text: "Both the head section and the body section are correct", correct: true },
      { text: "The head section", correct: false },
      { text: "The body section", correct: false },
      { text: "None of the above", correct: false }
    ]
    // Trivia: We can place the <script> tag inside the head tag or the body tag, 
    // both the techniques are correct.
  },
  {
    question: "Is it necessary for the external script file to contain a <script> tag?",
    answers: [
      { text: "Yes", correct: false },
      { text: "No", correct: true },
      { text: "Depends on the type of include", correct: false },
      { text: "None of the above", correct: false }
    ]
    // Trivia: No, it is not at all necessary to place a <script> tag inside the external 
    // javascript code, as your editor already knows it is a javascript code as you have saved the file with .js extension.
  },
  {
    question: "What is the correct syntax for referring to an external script called 'edx.js'?",
    answers: [
      { text: "<script name=>'edx.js'", correct: false },
      { text: "<script href='edx.js'>", correct: false },
      { text: "<script src='edx.js'>", correct: true },
      { text: "None of these", correct: false }
    ]
    // Trivia: The 'src' attribute is the one which is used to link the javascript file to the 
    // HTML document.
  },
  {
    question: "How many ways are there with which we can declare a variable in javascript?",
    answers: [
      { text: "Only one", correct: false },
      { text: "Three", correct: true },
      { text: "Infinitely many", correct: false },
      { text: "None of the above", correct: false }
    ]
    // Trivia: Before ES6 we had only one way of declaring variables: using var. 
    // After ES6 we have two more ways, let and const.
  },
];
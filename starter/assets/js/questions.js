// Question added with boolean to check if the answers are correct or incorrect
var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      "<javascript>",
      "<js>",
      "<src>",
      "<script>"
    ],
    correctAnswer: "<src>"
    // Trivia: The <script> tag is used to contain javascript code.
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      "Both the head section and the body section are correct",
      "The head section",
      "The body section",
      "None of the above"
    ],
    correctAnswer: "Both the head section and the body section are correct"
    // Trivia: We can place the <script> tag inside the head tag or the body tag, 
    // both the techniques are correct.
  },
  {
    question: "Is it necessary for the external script file to contain a <script> tag?",
    answers: [
      "Yes",
      "No",
      "Depends on the type of include",
      "None of the above"
    ],
    correctAnswer: "No"
    // Trivia: No, it is not at all necessary to place a <script> tag inside the external 
    // javascript code, as your editor already knows it is a javascript code as you have saved the file with .js extension.
  },
  {
    question: "What is the correct syntax for referring to an external script called 'edx.js'?",
    answers: [
      "<script name=>'edx.js'",
      "<script href='edx.js'>",
      "<script src='edx.js'>",
      "None of these"
    ],
    correctAnswer: "<script src='edx.js'>"
    // Trivia: The 'src' attribute is the one which is used to link the javascript file to the 
    // HTML document.
  },
  {
    question: "How many ways are there with which we can declare a variable in javascript?",
    answers: [
      "Only one",
      "Three",
      "Infinitely many",
      "None of the above"
    ],
    correctAnswer: "Three"
    // Trivia: Before ES6 we had only one way of declaring variables: using var. 
    // After ES6 we have two more ways, let and const.
  },
];
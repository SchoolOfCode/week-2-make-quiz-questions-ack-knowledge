// questions.js

// Add your questions here

//key:value

/*
  Subjects

  High performance routine:
    1. Which of these is a step in a high performance routine?
      Warm up
      Warm down (correct answer)
      Intense googling
      Revision


    2. What is the purpose of the preparation stage of HPR?
    To make good habits easier to do
    To ensure all tasks are completed in advance
    To allow maximum multitasking
    To guarantee a perfect outcome



  Git workflow (step order):


  Mindset:


  Agile:


  Computational thinking:

*/

/* 
  question_text: value of question - is string
  question_type: value of type - is string
  options: array of options - is string
  correct_option: value of option - is number
  correct_explanation: value of explanation - is string
*/

/*
  question_text: "text"
  question_type: "multiple_choice"
  options: ["text options"]
  correct_option: options.indexOf(option)
  correct_explanation: "text"
*/
const questions = [

  {
    question_text: "Which of these is a step in a high performance routine?",
    question_type: "multiple_choice",
    options: ["Warm up", "Warm down", "Intense Googling", "Revision"], 
    correct_option: 1,
    correct_explanation: "Warming down allows the mental transition between focus to recovery. It lowers anxiety, improves sleep and allows you to get more out of your recovery time."
  },
  {
    question_text:"What is the purpose of the preparation stage of HPR?",
    question_type: "multiple_choice",
    options: ["To make good habits easier to do", "To ensure all tasks are completed in advance", "To allow maximum multitasking", "To guarantee a perfect outcome"],
    correct_option: 0,
    correct_explanation: "Good habits are helpful to have in your routine as they give you a greater sense of calm and control.",
  },

  {
    question_text: "When pushing your project to GitHub, what is the next step after git add?",
    question_type:"multiple_choice",
    options:["git pull", "git rebase", "git merge", "git commit"],
    correct_option: 3,
    correct_explanation:"Git commit follows git add so we can add a message and put the file into the staging area.",
  },
];

// Don't worry about this, we're just exporting the questions
module.exports = questions;

//question 2
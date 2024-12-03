// questions.js

const questions = [
  // Add your questions here

  //key:value

  /*
    Subjects

    High performance routine:
      Which of these is a step in a high performance routine?
        Warm up
        Warm down (correct answer)
        Intense googling
        Revision

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

  {
    question_text: "Which of these is a step in a high performance routine?",
    question_type: "multiple_choice",
    options: ["Warm up", "Warm down", "Intense Googling", "Revision"],
  },
];

// Don't worry about this, we're just exporting the questions
module.exports = questions;

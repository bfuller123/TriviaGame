var questions = {
  question1: {
    options:[],
    answer: null//this will be the answer
  },
  question2: {
    options:[],
    answer: null//this will be the answer
  },
  question3: {
    options:[],
    answer: null//this will be the answer
  },
  question4: {
    options:[],
    answer: null//this will be the answer
  },
  question6: {
    options:[],
    answer: null//this will be the answer
  },
  question7: {
    options:[],
    answer: null//this will be the answer
  },
  question8: {
    options:[],
    answer: null//this will be the answer
  },
  question9: {
    options:[],
    answer: null//this will be the answer
  },
  question10: {
    options:[],
    answer: null//this will be the answer
  }
};

var gameFunctions = {
  correctAnswers: 0,
  incorrectAnswer: 0,
  getRandomQuestion: function(){
    //TODO: add function to get random question
  },
  displayQuestion: function(){
    //TODO: show question and add div where question will be
  },
  checkAnswer: function(){
    //TODO: compare userAnswer to answer
  },
  revealAnswer: function(){
    //TODO: reveal correct answer
  },
  tallyScore: function() {
    //TODO: show how many correct answers at end
  },
  resetGame: function() {
    //TODO: reset game
  }
};

var timeFunctions = {
  timerSecs: 15,
  startTimer: function(){
    //TODO: function to start timer once question begins
  },
  stopTimer: function() {
    //TODO: function to stop timer
  },
  displayTime: function() {
    //TODO: function to show remaining time
  }
};

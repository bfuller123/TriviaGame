var questions = {
  'What is the name of the bar at the top of the goal in hockey called?': {
    options:['postbar', 'crossbar', 'topbar', 'horizontal bar'],
    answer: 'crossbar'
  },
  'Which state first employed the bar exam?': {
    options:['Illinois', 'New York', 'Rhode Island', 'Massachussets'],
    answer: 'Massachussets'
  }/*,
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
  }*/
};

var gameFunctions = {
  correctAnswers: 0,
  incorrectAnswer: 0,
  questionsToAsk: [],
  randomizeQuestions: function(){
    gameFunctions.questionsToAsk = Object.keys(questions);
  },
  displayQuestion: function(){
    var question = gameFunctions.questionsToAsk.pop();
    $('#questionArea').html('<h3>'+question+'</h3>');
  }
  /*
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
  */
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

function startGame(){
  gameFunctions.randomizeQuestions();
  gameFunctions.displayQuestion();
}

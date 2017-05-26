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
  questionsToAsk: Randomize.objectKeys(questions),
  displayQuestion: function(){
    //TODO: Add answer attr to each button containing the answer that the button displays
    var question = gameFunctions.questionsToAsk.pop();
    var answers = Randomize.array(questions[question].options);
    $('#questionArea').html('<h3>'+question+'</h3><br>');
    for(let i=0; i < answers.length; i++){
      $('#questionArea').append('<button class="btn btn-primary">'+answers[i]+'</button>');
      $('#questionArea').append('<br><br>');
    }
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
  gameFunctions.displayQuestion();
}

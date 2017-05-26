var currentQuestion = null;
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
  incorrectAnswers: 0,
  questionsToAsk: Randomize.objectKeys(questions),
  currentQuestion: null,
  displayQuestion: function(){
    var question = gameFunctions.questionsToAsk.pop();
    currentQuestion = question;
    var answers = Randomize.array(questions[question].options);
    $('#questionArea').html('<h3>'+question+'</h3><br>');
    for(let i=0; i < answers.length; i++){
      var newButton = $('<button>');
      newButton.addClass('btn btn-primary');
      newButton.attr('data-answer', answers[i]);
      newButton.text(answers[i]);
      $('#answersArea').append(newButton);
      $('#answersArea').append('<br><br>');
    }
  },
  revealAnswerCorrect: function(){
    $('#answersArea').html('<h4>'+questions[currentQuestion].answer+' is correct!</h4>');
  },
  revealAnswerIncorrect: function(){
    $('#answersArea').html("<h4>I'm sorry. The correct answer is "+questions[currentQuestion].answer+'.</h4>');
  },
  checkAnswer: function(){
    var correctAnswer = questions[currentQuestion].answer;
    var answerChosen = $(this).attr('data-answer');

    if (correctAnswer === answerChosen) {
      gameFunctions.correctAnswers++;
      gameFunctions.revealAnswerCorrect();
    }
    else {
      gameFunctions.incorrectAnswers++;
      gameFunctions.revealAnswerIncorrect();
    }
  },
  tallyScore: function() {
    $('#answersArea').html('<p>Correct answers given:'+gameFunctions.correctAnswers+'</p>');
    $('#answersArea').append('<p>Incorrect answers given:'+gameFunctions.correctAnswers+'</p>');
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

function startGame(){
  console.log(gameFunctions.questionsToAsk);
  gameFunctions.displayQuestion();
}

$(document).on('click', '.btn-primary', gameFunctions.checkAnswer);

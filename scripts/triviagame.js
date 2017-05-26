var currentQuestion = null;
var timerID;

var questions = {
  'What is the name of the bar at the top of the goal in hockey called?': {
    options: ['postbar', 'crossbar', 'topbar', 'horizontal bar'],
    answer: 'crossbar'
  },
  'Which state first employed the bar exam?': {
    options: ['Illinois', 'New York', 'Rhode Island', 'Massachussets'],
    answer: 'Massachussets'
  },
  'Which of these is NOT a definition of the idiom of "bar none"?': {
    options: ['no exclusions', 'for sure', 'without exceptions', 'obviously'],
    answer: 'obviously'
  },
  'What year did Barbie make her debut?': {
    options: ['1959', '1952', '1957', '1955'],
    answer: '1959'
  },
  "What is Babar the Elephant's occupation?": {
    options: ['scientist', 'king', 'lawyer', 'fire fighter'],
    answer: 'king'
  },
  'What is the other placeholder in programming that goes along with "bar"?': {
    options: ['Boo', 'Doo', 'Goo', 'Foo'],
    answer: 'Foo'
  },
  'Where does the dance "Bar" originate from?': {
    options: ['Oklahoma', 'Turkey', 'Ukraine', 'Alabama'],
    answer: 'Turkey'
  },
  'What do two vertical bars in programming mean?': {
    options: ['Or', 'False', 'And', 'If'],
    answer: 'Or'
  },
  'In firearms, what does BAR stand for?': {
    options: ['Bowing Action Recoil', 'Browning Automatic Rifle', 'Branson Artillary Rounds', 'Bolted Assault Ruger'],
    answer: 'Browning Automatic Rifle'
  }
};

var timeFunctions = {
  questiontimerSecs: 15,
  revealTimerSecs: 3000, //in milliseconds
  stopTimer: function(timerToStop) {
    clearInterval(timerToStop);
    timeFunctions.questiontimerSecs = 15;
  },
  displayTime: function() {
    $('#timerArea').html(timeFunctions.questiontimerSecs);
  },
  countdown: function() {
    timeFunctions.questiontimerSecs--;
    timeFunctions.displayTime();
    if (timeFunctions.questiontimerSecs === 0) {
      timeFunctions.stopTimer(timerID);
      gameFunctions.revealAnswerIncorrect();
    }
  },
  revealAnswerTimer: function() {
    timeFunctions.stopTimer(timerID);
    setTimeout(gameFunctions.displayQuestion, timeFunctions.revealTimerSecs);
  },
  startQuestionTimer: function() {
    timeFunctions.displayTime();
    timerID = setInterval(timeFunctions.countdown, 1000);
  }
};

var gameFunctions = {
  correctAnswers: 0,
  incorrectAnswers: 0,
  questionsToAsk: Randomize.objectKeys(questions),
  currentQuestion: null,
  tallyScore: function() {
    $('#answersArea').html('<p>Correct answers given: ' + gameFunctions.correctAnswers + '</p>');
    $('#answersArea').append('<p>Incorrect answers given: ' + gameFunctions.correctAnswers + '</p>');
  },
  displayQuestion: function() {
    if (gameFunctions.questionsToAsk.length > 0) {
      var question = gameFunctions.questionsToAsk.pop();
      currentQuestion = question;
      var answers = Randomize.array(questions[question].options);
      $('#questionArea').html('<h3 id="questionAsked">' + question + '</h3><br>');
      $('#answersArea').empty();
      for (let i = 0; i < answers.length; i++) {
        var newButton = $('<button>');
        newButton.addClass('btn btn-primary');
        newButton.attr('data-answer', answers[i]);
        newButton.text(answers[i]);
        $('#answersArea').append(newButton);
        $('#answersArea').append('<br><br>');
      }
      timeFunctions.startQuestionTimer();
    } else {
      gameFunctions.tallyScore();
    }
  },
  revealAnswerCorrect: function() {
    $('#answersArea').html('<h4>' + questions[currentQuestion].answer + ' is correct!</h4>');
    timeFunctions.revealAnswerTimer();
  },
  revealAnswerIncorrect: function() {
    $('#answersArea').html("<h4>I'm sorry. The correct answer is " + questions[currentQuestion].answer + '.</h4>');
    timeFunctions.revealAnswerTimer();
  },
  checkAnswer: function() {
    var correctAnswer = questions[currentQuestion].answer;
    var answerChosen = $(this).attr('data-answer');

    if (correctAnswer === answerChosen) {
      gameFunctions.correctAnswers++;
      gameFunctions.revealAnswerCorrect();
    } else {
      gameFunctions.incorrectAnswers++;
      gameFunctions.revealAnswerIncorrect();
    }
  }
};


function startGame() {
  $('header').html('<h1>BAR TRIVIA</h1>');
  gameFunctions.displayQuestion();
}

$(document).on('click', '.btn-primary', gameFunctions.checkAnswer);

$('#start').on('click', function() {
$('#start').remove();

game.loadQuestion()
})

$(document).on('click','.answer-button', function(e) {
  game.clicked(e)
})

$(document).on('click', '#reset', function() {
  game.reset()
})

var questions = [
  {
  question: "Which soundtrack from the 90's featured the Loney Tunes?",
  answers: ["Titanic", "SpaceJam", "BraveHeart", "Pulp Fiction" ],
  correctAnswer: "SpaceJam",
  gif:"https://i.giphy.com/media/LUahbgrnfip5C/source.gif",
  },
  {
  question: "What animal was Neo instructed to follow at the beginning of the movie The Matrix?",
  answers: ["Green Snake","Black Mouse","Gray Owl","White Rabbit"],
  correctAnswer:"White Rabbit",
  gif: "https://media.giphy.com/media/1yvoDVJQsTfHi/giphy.gif"
  },
  {
  question: "What was the name of the original Red ranger?",
  answers:["Jason","Tommy","Billy","Zachary"],
  correctAnswer:"Jason",
  gif: "https://media.giphy.com/media/nDgKYZqJeK5l6/giphy.gif" ,
  },
  {
  question: "Who had the most #1 hit singles in the 90's?",
  answers: ["Mariah Carey","Michael Jackson", "Boys to Men", "Whitney Houston"],
  correctAnswer:"Mariah Carey",
  gif: "https://media.giphy.com/media/8RtwsZCgRzMt2/giphy.gif",
  },
  {
  question: "Which game console was NOT released in the 90's?",
  answers: ["Nintendo GameCube","Super Nintendo", "Playstation 1", "DreamCast"],
  correctAnswer: "Nintendo GameCube",
  gif: "https://media.giphy.com/media/Z9GOfgSz5p5Go/giphy.gif",
  },
  {
  question: 'In the 1992 Olympic, what was the average points scored by the "Dream Team"?',
  answers: ["97","107","117","127"],
  correctAnswer: "117",
  gif: "https://media.giphy.com/media/l0ErIQliPIVVPxle0/giphy.gif",
  },
  {
  question: "Which actor/actress was kill first in the horror movie Scream?",
  answers: ["Halle Berry","Jim Carry","Tom Hanks","Drew Barrymore"],
  correctAnswer: "Drew Barrymore",
  gif: "https://media.giphy.com/media/mtO2kkFT9KMA8/giphy.gif",
  },
]
var questionNum = 0
var game = {
  questions:questions,
  counter:30,
  currentQuestion:0,
  correct:0,
  incorrect:0,
  unanswered: 0,

  countdown: function(){
    game.counter--
    $('#counter').html(game.counter)
    if(game.counter<=0) {
      game.timeUp()
    }

  },
  loadQuestion: function() {
    timer = setInterval(game.countdown,1000)
    game.counter = 30;
    $('#trivaArea').html("<h5> <span id='counter'>30</span>  </h5>")
    $('#trivaArea').append('<h2>'+questions[game.currentQuestion].
      question+'</h2>')
    for(var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
      $('#trivaArea').append('<button class="answer-button btn btn-outline-light" id="button-'+i+'" data-name="'+questions[game.
        currentQuestion].answers[i]+ '">'+questions[game.
        currentQuestion].answers[i]+'</button>')
      id="button"
    }
  },

  // $(div).append=<img>
  nextQuestion: function() {
    game.counter = 30;
    $('#counter').html(game.counter)
    game.currentQuestion++
    game.loadQuestion()
  },

  timeUp: function() {
    clearInterval(timer)
    game.unanswered++
    $('#trivaArea').html('<h2>OUT OF TIME!</h2>')
    $('#trivaArea').append('<h3>The correct answer was: ' + questions[game.
    currentQuestion].correctAnswer+'</h3>')
   if(game.currentQuestion==questions.length-1) {
      setTimeout(game.results,3*1000)
    }else{
      setTimeout(game.nextQuestion,3*1000)
    }
  },

  results: function() {
    clearInterval(timer)
    $('#trivaArea').html('<h2>ALL DONE!</h2>')
    $('#trivaArea').append("<h3>Correct: "+game.correct+"</h3>")
    $('#trivaArea').append("<h3>Incorrect: "+game.incorrect+"</h3>")
    $('#trivaArea').append("<h3>Unanswered: "+game.unanswered+"</h3>")
    $('#trivaArea').append("<button id='reset'>RESET</button>")
  },

  // Correct or Incorrect Actions
  clicked: function(e) {
    clearInterval(timer)
    if($(e.target).data("name")==questions[game.currentQuestion].
    correctAnswer) {
      game.answeredCorrectly()
    } else {
      game.answeredIncorrectly()
    }

  },

  answeredCorrectly: function() {
    clearInterval(timer)
    game.correct++
    $('#trivaArea').html('<img width="450" height="270" src=' + questions[questionNum].gif +'>')
    $('#trivaArea').append('<h2>YOU GOT IT RIGHT!</h2>')
    $('#trivaArea').append('<h3>The correct answer was: ' + questions[game.currentQuestion].correctAnswer+'</h3>')
    questionNum++
    if(game.currentQuestion==questions.length-1) {
      setTimeout(game.results,3*1000)
    }else{
      setTimeout(game.nextQuestion,3*1000)
    }

  },
  answeredIncorrectly: function() {
    clearInterval(timer)
    game.incorrect++
    $('#trivaArea').html('<img width="450" height="270" src=' + questions[questionNum].gif +'>')
    $('#trivaArea').append('<h2>YOU GOT IT WRONG!</h2>')
    $('#trivaArea').append('<h3>The correct answer was: ' + questions[game.
      currentQuestion].correctAnswer+'</h3>')
      questionNum++
    if(game.currentQuestion==questions.length-1) {
      setTimeout(game.results,3*1000)
    }else{
      setTimeout(game.nextQuestion,3*1000)
    }
  },

  // reset functions
  reset: function() {
    game.currentQuestion =0
    game.counter = 0
    game.correct = 0
    game.incorrect = 0
    game.unanswered = 0
    game.loadQuestion()
  }
}
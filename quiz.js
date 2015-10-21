document.addEventListener('DOMContentLoaded',function(){

  var quiz = {
    name : "Presidents",
    questions : [
      {
        question : "Who is the current president?",
        answers : ["Clinton", "Obama", "Bush", "Nixon"],
        correct : 1
      },
      {
        question : "What is the President's address?",
        answers : ["Trump Tower", "Beverly Hills 90210", "1600 Pennsylvania Ave", "Yankee Stadium"],
        correct : 2
      },
      {
        question : "How long is a presidential term?",
        answers : ["Lifetime", "2 Years", "3 Years", "4 Years"],
        correct : 3
      }            
    ]
  };

  function displayQuestion(index) {
    var questionEl = document.getElementById("question");
    questionEl.innerHTML = "<p>" + quiz.questions[index].question + "</p>";

    var answersEl = document.getElementById("answers");

    for (var i = 0; i < quiz.questions[index].answers.length; i++) {
      answersEl.innerHTML += "<input type='radio' name='answer' value='" + index + "'>" 
                            + quiz.questions[index].answers[i] 
                            + "<br>";
    }
  }

  var currentQuestion = 0;
  var score = 0;

  displayQuestion(currentQuestion);

});

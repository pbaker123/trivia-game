var questions = [
	{
		question: "What is the seventh planet from the sun?",
		answera: "Hisanus",
		answerb: "Heranus",
		answerc: "Uranus",
		answerd: "Myanus",
		correct: "Uranus",
		correctlabel: "labelc",
		imageClass: "q1"
	},
	{
		question: "What colour jersey is worn by the winners of each stage of the Tour De France?",
		answera: "Purple",
		answerb: "Blue",
		answerc: "Green",
		answerd: "Yellow",
		correct: "Yellow",
		correctlabel: "labeld",
		imageClass: "q2"
	},
	{
		question: "Who is the only heavyweight boxing champion to finish his career of 49 fights without ever having been defeated?",
		answera: "Mike Tyson",
		answerb: "Rocky Marciano",
		answerc: "Muhammad Ali",
		answerd: "Floyd Mayweather",
		correct: "Rocky Marciano",
		correctlabel: "labelb",
		imageClass: "q3"
	},
	{
		question: "In needlework, what does UFO refer to?",
		answera: "An unfinished object",
		answerb: "An unidentified flying object",
		answerc: "An unbelievably fly orangutan",
		answerd: "An unfilled oreo",
		correct: "An unfinished object",
		correctlabel: "labela",
		imageClass: "q4"
	},
	{
		question: "What is John Leach famous for making?",
		answera: "Toll House Cookies",
		answerb: "Pottery",
		answerc: "Economic Theory",
		answerd: "Printing Press",
		correct: "Pottery",
		correctlabel: "labelb",
		imageClass: "q5"
	},
	{
		question: "When was William Shakespeare born?",
		answera: "17 September 1492",
		answerb: "11 January 514",
		answerc: "12 May 1699",
		answerd: "23 April 1564",
		correct: "23 April 1564",
		correctlabel: "labeld",
		imageClass: "q6"
	},
	{
		question: "What flavour is Cointreau?",
		answera: "Orange",
		answerb: "Anise",
		answerc: "Habinero",
		answerd: "Peach",
		correct: "Orange",
		correctlabel: "labela",
		imageClass: "q7"
	},
];

var gameSummary = ["You got 0 questions correct, try again!","You got 1 question correct, try again!","You got 2 questions correct, you should join a bootcamp","You got 3 questions correct, you should own a bootcamp","You got 4 quetions correct, you rock!","You got 5 questions correct, keep up the good work!","You got 6 questions correct, you're amazing!","You got all 7 questions correct, close the console.log you cheater!"]

var questionCounter = 0;
var initialTimer = 15;
var intervalId;
var intervalId2;
var nextQuestionTimer = 5;
var correctGuess = 0;
var gameContainer = $("#game-container");
var startButton = $("#start-button");
var startScreen = $("#start-screen");
var summaryScreen = $("#summary-screen");
var mainGame = $("#main-game");
var inquiry = $("#inquiry");
var answerImage = $("#answer-image");
var timer = $("#timer");
var nqt = $("#next-question-timer");
var answers = $("#answers");
var labela = $("#labela");
var labelb = $("#labelb");
var labelc = $("#labelc");
var labeld = $("#labeld");
var answera = $("#answera");
var answerb = $("#answerb");
var answerc = $("#answerc");
var answerd = $("#answerd");
var correctPlayerAnswer = $("#correct-player-answer");

var currentQuestion = "";
var currentAnswerA = "";
var currentAnswerB = "";
var currentAnswerC = "";
var currentAnswerD = "";
var currentCorrectAnswer = "";
var currentCorrectLabel = "";
var currentWrongLabel = "";
var currentImageClass = "";
var currentGuess = "";
var currentLabel = "";
var clicky = true;

function createQuestionScreen() {

	stop2()
	// Set initial state
	clicky = false;
	startScreen.addClass("hide");
	summaryScreen.addClass("hide");
	answerImage.addClass("hide");

	// Set all current variables from question[i]
	currentQuestion = questions[questionCounter].question;
	console.log(currentQuestion);
	currentAnswerA = questions[questionCounter].answera;
	
	currentAnswerB = questions[questionCounter].answerb;
	
	currentAnswerC = questions[questionCounter].answerc;
	
	currentAnswerD = questions[questionCounter].answerd;
	
	currentCorrectAnswer = questions[questionCounter].correct;
	console.log("The answer is " + currentCorrectAnswer);
	currentCorrectLabel = questions[questionCounter].correctlabel
	currentImageClass = questions[questionCounter].imageClass;
	

	// Populate the #question with question[i] where i equals question counter
	inquiry.text(currentQuestion);

	// Polulate the guesses where question[i] equals question counter and the element equals the div class and add a data-label equal to the answer
	answera.text(currentAnswerA);
	answerb.text(currentAnswerB);
	answerc.text(currentAnswerC);
	answerd.text(currentAnswerD);

	// Remove Opacity and any answer symbols
	labela.removeClass("opacity");
	labelb.removeClass("opacity");
	labelc.removeClass("opacity");
	labeld.removeClass("opacity");
	labela.removeClass("correctAnswer");
	labelb.removeClass("correctAnswer");
	labelc.removeClass("correctAnswer");
	labeld.removeClass("correctAnswer");
	labela.removeClass("wrongAnswer");
	labelb.removeClass("wrongAnswer");
	labelc.removeClass("wrongAnswer");
	labeld.removeClass("wrongAnswer");	
	answera.attr("class", "guess");
	answerb.attr("class", "guess");
	answerc.attr("class", "guess");
	answerd.attr("class", "guess");
	$(".guess").removeClass("opacity");

	// Show the question
	inquiry.removeClass("hide");
	

	// Run the questionTimer
	questionTimer();

	// show the questionTimer and hide the answerTimer
	$("#questionTimer").removeClass("hide");
	$("#answerTimer").addClass("hide");
	
	// Show #question, #timer, and #answers
	mainGame.removeClass("hide");

	
};

function playerGuess() {
	clicky = true;
	// Compare the data-label of the div clicked with question[i]-correct
	if (currentCorrectAnswer === questions[questionCounter][currentGuess]) {
		correctAnswer()
	} else {

		// record the wrong guess to wrongGuess label
		wrongGuess()
	}
	// if they match run correctGuess() else wrongGuess()
};

function correctAnswer() {

	stop()
	answerTimer()
	$("#questionTimer").addClass("hide");
	$("#answerTimer").removeClass("hide");

	// Increase questionCounter by 1
	questionCounter++

	// Increase correctGuess variable by 1
	correctGuess++

	// Reset the timer variable to 15 seconds

	// set all class guess to opacity
	$(".guess").addClass("opacity");
	labela.addClass("opacity");
	labelb.addClass("opacity");
	labelc.addClass("opacity");
	labeld.addClass("opacity");

	// remove opacity from current correct answer
	$("#" + currentGuess).removeClass("opacity");

	// add check mark for current correct answer and remove opacity
	$("#" + currentCorrectLabel).addClass("correctAnswer")

	// set answer-image to question[i]-image-class
	answerImage.addClass(currentImageClass);

	// Hide #question
	inquiry.addClass("hide");

	// show #answer-image
	answerImage.removeClass("hide")
};

function wrongGuess() {

	stop()
	answerTimer()
	$("#questionTimer").addClass("hide");
	$("#answerTimer").removeClass("hide");

	var cca = "#" + currentGuess;
	var ccl = "#" + currentCorrectLabel;
	var cl = "#" + currentLabel;

	// Reset the timer variable to 15 seconds
	// Increase questionCounter by 1
	questionCounter++
	
	// Hide #question
	$(".guess").addClass("opacity");
	labela.addClass("opacity");
	labelb.addClass("opacity");
	labelc.addClass("opacity");
	labeld.addClass("opacity");

	// remove opacity from current correct answer
	$(cca).removeClass("opacity");

	// add check mark for current correct answer and remove opacity
	$(ccl).addClass("correctAnswer");
	$(cl).addClass("wrongAnswer");

	// set answer-image to question[i]-image-class
	answerImage.addClass(currentImageClass);

	// Hide #question
	inquiry.addClass("hide");

	// show #answer-image
	answerImage.removeClass("hide");
};

function outOfTime() {

	stop()
	answerTimer()
	$("#questionTimer").addClass("hide");
	$("#answerTimer").removeClass("hide");
	var ccl = "#" + currentCorrectLabel;
	
	questionCounter++

	// Hide #question
	$(".guess").addClass("opacity");
	labela.addClass("opacity");
	labelb.addClass("opacity");
	labelc.addClass("opacity");
	labeld.addClass("opacity");
	answerImage.addClass(currentImageClass);
	$(ccl).addClass("correctAnswer");

	// Hide #question
	inquiry.addClass("hide");

	// show #answer-image
	answerImage.removeClass("hide");
};

function endScreen() {
	mainGame.addClass("hide")
	summaryScreen.removeClass("hide")
	$("#summary-data").text(gameSummary[correctGuess])
	$("#s-button").on("click", function() {
		questionCounter = 0;
		correctGuess = 0;
		answerImage.attr("class", "question-insert")
		createQuestionScreen();
	});
};

function questionTimer() {
      clearInterval(intervalId);
      initialTimer = 15;
      intervalId = setInterval(decrement, 1000);
};

function decrement() {

	//  Decrease initialTimer by one.
	initialTimer--;

	//  Show the number in the #timer tag.
	timer.html(initialTimer);

  	//  Once number hits zero...
  	if (initialTimer === 0) {
  		
	    //  ...run the stop function.
	    stop();

	    //  Alert the user that time is up.
	    outOfTime();
  	}
};

function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
};

function answerTimer() {
	
      clearInterval(intervalId2);
      nextQuestionTimer = 5;
      intervalId2 = setInterval(decrement2, 1000);
};

function decrement2() {

	//  Decrease initialTimer by one.
	nextQuestionTimer--;

	//  Show the number in the #timer tag.
	nqt.html(nextQuestionTimer);
	

  	//  Once number hits zero...
  	if (nextQuestionTimer === 0) {
  		
	    //  ...run the stop function.
	    stop2();

	    if (questionCounter === 7) {
	    	endScreen()
	    	return;
	    };

	    //  Alert the user that time is up.
	    createQuestionScreen();
  	}
};

function stop2() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId2);
};

$(document).ready(function() {

	

	startButton.on("click", function() {
		questionCounter = 0;
		correctGuess = 0;
		createQuestionScreen();
	});

	$(".guess").on("click", function() {

		if (clicky == true) {
			return;
		}

		// add guard statement "if a variable = true then return; otherwise do below"
		currentGuess = this.id;
		currentLabel = $("#" + currentGuess).attr("data-label");
		playerGuess();

	});
	
  
});
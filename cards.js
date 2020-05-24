var banner = $(".banner");
var qfield = $(".question");
var input = $("#result")
var submit = $("#submit");
var start = $("#start");
var show = $("#show");
var reset = $("#reset")
var questionButton = $(".questionButton");
var scoreDisplay = $(".scorepad");

var score;
if (localStorage.getItem('score')) {
	score = parseInt(localStorage.getItem('score'));
} else {
	score = 0;
}
// Best practice is to always use parentheses and curly brackets with if / else statements in JS

var questionsAnswered = localStorage.questionsAnswered;
if (questionsAnswered) {
	questionsAnswered = questionsAnswered.split(',');
} else {
	questionsAnswered = [];
}
// Refer to this article for guidance on using localStorage: https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage

var questionArray = [{
	question: "8 + 2 = ?",
	answer: 10,
	hint: "10"
}, {
	question: "5 + 3 = ?",
	answer: 8,
	hint: "8"
}, {
	question: "6 - 6 + 6 / 6 = ?",
	answer: 1,
	hint: "1"
}, {
	question: "Give me 3 positive numbers that will result the same when multiplied together or added together",
	answer: 123,
	hint: "1 + 2 + 3 = 6 || 1 * 2 * 3 = 6"
}, {
	question: "A merchant can place 8 large boxes or 10 small boxes into a carton for shipping. In one shipment, he sent a total of 96 boxes. If there are more large boxes than small boxes, how many cartons did he ship?",
	answer: 11,
	hint: "7 cartons for larges boxes per carton, where 7 x 8 = 56 boxes. 4 for small boxes, where 4 x 10 = 40 boxes. 96 total boxes and 11 cartons"
}, {
	question: "How many times can you take away 2 from 100?",
	answer: 1,
	hint: "Once! Because after that it's not 100 anymore"
}, {
	question: "There are 2 mothers, 2 daughters, 1 grandma and 1 grandaughter. How many people are there?",
	answer: 3,
	hint: "3 people. one mother is the mother of another daughter. (2 mothers) another mother's child and her child. (2 daughters). 1grandma the oldest one there. 1 grandaughter the smallest."
}, {
	question: "I am an odd number. Take away one letter and I become even. What number am I? ",
	answer: 7,
	hint: 'Seven (take away the ‘s’ and it becomes ‘even’).'
}, {
	question: "A farmer had 15 sheep, and all but 8 died. How many are left?",
	answer: 8,
	hint: "8 of course."
}, {
	question: "How many four cent postal cards are there in a dozen?",
	answer: 12,
	hint: "Dozen is 12"
}]
// Good use of data structures to organize your question / answer data

var questionIndex = -1;
var currentAnswer;
var currentHint;

// Look into restructuring your code to list all variables together at the top, all
// functions together in the middle, and all event listeners together at the bottom
// (makes code more organized / readable)

input.keypress(function(event) { //
	if (event.which == 13) {
		event.preventDefault();
		onSubmit();
	}
});

function update(id) { // Updates score
	if (!questionsAnswered.includes(id)) {
		questionsAnswered.push(id);
		score++;
		localStorage.setItem('score', score);
		localStorage.setItem('questionsAnswered', questionsAnswered);

	}
	scoreDisplay.text("Hey, your score is " + score + "/10");
};
$('#next').click(function() { // click next function
	banner.empty();
	questionIndex++;
	var currentQuestion = questionArray[questionIndex];
	qfield.text(currentQuestion.question);
	currentAnswer = currentQuestion.answer;
	currentHint = currentQuestion.hint;
});

function onSubmit() {
	var userInput = parseInt(input.val()); //validation fuction and sound
	if (userInput === currentAnswer) {
		banner.text(userInput + " is correct!");
		var bell = new Audio('sound/ff-bell.wav');
		bell.play();
		banner.css("color", "#00FF00");
		update(questionIndex);
		input.val("");

	} else {
		banner.text("Wrong Answer!");
		banner.css("color", "#d10e0e");
		var buzzer = new Audio('sound/BUZZER.mp3');
		buzzer.play();
		input.val("");

	}
}

$("#submit").on('click', onSubmit);
start.on("click", function() { // Shows Question buttons
	// Maybe look into putting the DOM manipulation into a method that can be called here
	// (makes it more reusable)
	$(".score").fadeIn(1000);
	questionButton.fadeIn();
	show.fadeIn();
	submit.fadeIn();
	input.fadeIn();
	start.hide();
	reset.fadeIn();
	qfield.text('Hit NEXT to skip to the questions');
});

$("#reset").on("click", function() {
	score = 0;
	questionsAnswered = [];
	localStorage.removeItem("score");
	localStorage.removeItem("questionsAnswered");
	scoreDisplay.text("Score is set to " + score);
	banner.text('')

	$(document).ready(function() { //Hides Buttons and Show start.
		$(".score").hide();
		questionButton.hide();
		reset.hide();
		show.hide();
		submit.hide();
		input.hide();
		start.fadeIn();
		qfield.text("Hit Next to skip to the questions")
	});
});


show.on("click", function() { // Show hint to the question.
	qfield.text("Answer: " + currentHint);
	// You don't need a return here, since the DOM manipulation is a side effect
})

// Is this a repitition of the $(document).ready() above?
$(document).ready(function() { //Hides Buttons and Show start button.
	$(".score").hide();
	questionButton.hide();
	reset.hide();
	show.hide();
	submit.hide();
	input.hide();
	start.fadeIn();
	qfield.text("Start the Game!")


});

var banner = $(".banner"); 
var qfield = $(".question");
var input  = $("#result")
var submit = $("#submit");
var start = $("#start");
var show = $("#show");
var reset = $("#reset")
var questionButton = $(".questionButton");
var scoreDisplay = $(".scorepad");


var score = localStorage.score;
if (score) score = parseInt(score); else score =0;
var questionsAnswered = localStorage.questionsAnswered;
if (questionsAnswered) questionsAnswered = questionsAnswered.split(','); else questionsAnswered = []; 

var questionArray= [
{question: "8 + 2 = ?", answer: 10, hint: "10"}
,{question: "5 + 3 = ?", answer: 8, hint: "8"}
,{question: "6 - 6 + 6 / 6 = ?", answer: 1, hint: "1"}
,{question: "Give me 3 positive numbers that will result the same when multiplied together or added together", answer: 123, hint: "1 + 2 + 3 = 6 and 1 * 2 * 3 = 6"}
,{question: "A merchant can place 8 large boxes or 10 small boxes into a carton for shipping. In one shipment, he sent a total of 96 boxes. If there are more large boxes than small boxes, how many cartons did he ship?", answer: 11, hint:"7 cartons for larges boxes per carton, where 7 x 8 = 56 boxes. 4 for small boxes, where 4 x 10 = 40 boxes. 96 total boxes and 11 cartons"}
,{question:"How many times can you take away 2 from 100?", answer : 1, hint: "Once! Because after that it's not 100 anymore"}
,{question:"There are 2 mothers, 2 daughters, 1 grandma and 1 grandaughter. How many people are there?", answer: 3, hint:"3 people. one mother is the mother of another daughter. (2 mothers) another mother's child and her child. (2 daughters). 1grandma the oldest one there. 1 grandaughter the smallest."}
]
var questionIndex =-1; 
var currentAnswer; 
var currentHint; 



input.keypress(function(event) { // 
    if (event.which == 13) {
		event.preventDefault();
        onSubmit(); 
    }
});
function update(id) { //A function to update the score
	if (!questionsAnswered.includes(id)) {
		questionsAnswered.push(id); 
		score++; 
		localStorage.setItem('score',score);
		localStorage.setItem('questionsAnswered', questionsAnswered); 
	}
	scoreDisplay.text("Your score: " + score + " out of 7");
};

$('#next').click(function() {
	qfield.addClass("red");
	banner.empty();
	questionIndex++; 
	var currentQuestion = questionArray[questionIndex];
	qfield.text(currentQuestion.question); 
	currentAnswer = currentQuestion.answer;
	currentHint = currentQuestion.hint; 
	

}); 

function onSubmit() {
	var userInput = parseInt(input.val());
    if (userInput === currentAnswer ) {
		banner.text(userInput + " is correct!");
		banner.css("color", "#00FF00");
		update(questionIndex);
		input.val("");

		} 
	else {
			return banner.text("Wrong Answer!");
			input.val("");
		}
}



$("#submit").on('click', onSubmit); 
	
start.on("click", function () { // Shows Question buttons
		$(".score").fadeIn(1000);
		questionButton.fadeIn();
		show.fadeIn();
		submit.fadeIn();
		input.fadeIn();
		start.hide();
		reset.fadeIn();
});	

$("#reset").on("click", function(){
	score = 0;
	questionsAnswered = [];
	localStorage.removeItem("score");
	localStorage.removeItem("questionsAnswered");
	scoreDisplay.text("Score is set to " + score);
	// banner.hide();
	// qfield.text("");
	$(document).ready(function() {		//Hides Buttons and Show start.
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
					// Show hint to the question. 
show.on("click", function(){ 
	// qfield.addClass("blue");
	return qfield.text("Answer: " + currentHint);
	



})


$(document).ready(function() {		//Hides Buttons and Show start.
	$(".score").hide();
	questionButton.hide();
	reset.hide();
	show.hide();
	submit.hide();
	input.hide();
	start.fadeIn();
	qfield.text("Hit Next to skip to the questions")
});





    







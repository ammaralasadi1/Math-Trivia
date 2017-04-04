var banner = $(".banner"); 
var qfield = $(".question");
var input  = $("#result")
var submit = $("#submit");
var start = $("#start");
var right = ("Correct!");
var wrong = ("Try again!")
var show = $("#show");
var questionButton = $(".questionButton");
var score = [];
var questionsAnswered = [];
var q_and_a = {

	a: {question: "8 + 2 = ?", answer: 10, hint: "10"}  
	,b: {question: "5 + 3 = ?", answer: 8, hint: "8"}  
	,c: {question: "6 - 6 + 6 / 6 = ?", answer: 1, hint: "1"}
	,d: {question: "Give me 3 positive numbers that will result the same when multiplied together or added together", answer: 123, hint: "1 + 2 + 3 = 6 and 1 * 2 * 3 = 6"}
	,e: {question: "A merchant can place 8 large boxes or 10 small boxes into a carton for shipping. In one shipment, he sent a total of 96 boxes. If there are more large boxes than small boxes, how many cartons did he ship?", answer: 11, hint:"7 cartons for larges boxes per carton, where 7 x 8 = 56 boxes. 4 for small boxes, where 4 x 10 = 40 boxes. 96 total boxes and 11 cartons"}
	,f: {question:"How many times can you take away 2 from 100?", answer : 1, hint: "Once! Because after that it's not 100 anymore"}
	,g: {question:"There are 2 mothers, 2 daughters, 1 grandma and 1 grandaughter. How many people are there?", answer: 3, hint:"3 people. one mother is the mother of another daughter. (2 mothers) another mother's child and her child. (2 daughters). 1grandma the oldest one there. 1 grandaughter the smallest."}
};



$(document).ready(function() {		//Hides Buttons and Show start.
	$(".score").hide();
	questionButton.hide();
	show.hide();
	submit.hide();
	input.hide();
	start.fadeIn(slow);
});
	
	start.on("click", function () { // Shows Question buttons
		$(".score").fadeIn(300);
		questionButton.fadeIn();
		show.fadeIn();
		submit.fadeIn();
		input.fadeIn();
		start.hide(slow);
	});	


	
	function updateScore() { //A function to update the score
		score.push("1");
		input.val(" ");
		$(".scorepad").text("Your score: " + (score.length) + " out of 7");

};

 	$(".questionButton").on('click', function() { //Pulls Q, A and Hint and validates the answer. 

		var id = this.id;
			let answered = false

			banner.empty()
				qfield.text(q_and_a[id].question); 

					$("#submit").on('click', function() {

						var userInput = parseInt(input.val());


							if (userInput === q_and_a[id].answer ) {

								banner.text(userInput + " is " + right);
								if(!questionsAnswered.includes(id)) {
									updateScore();
								}

								questionsAnswered.push(id)

							} else {
								return banner.text(wrong);
							}
});
	
	
					// Show hint to the question. 
	show.on("click", function(){     
		return banner.text("Answer: " + q_and_a [id].hint);
	})
});




    







var banner = $(".banner"); 
var qfiled = $(".question");
var input  = $("#result")
var submit = $("#submit");
var next = $("#next");
var start = $("#start");
var right = ("Correct!");
var wrong = ("Try again!")
var show = $("#show");

var questions = {
	a: "8 + 2 = ?", 
	b: "5 + 3 = ?", 
	c: "6 - 6 + 6 / 6 = ?",
	d: "What blood type do you need to be a universal donor ?",
	d: "I know a three positive numbers that will results the same when multiplied together or added together",
	f: "A merchant can place 8 large boxes or 10 small boxes into a carton for shipping. In one shipment, he sent a total of 96 boxes. If there are more large boxes than small boxes, how many cartons did he ship?",
	g: "How many times can you take away 2 from 100?",
	h: "There are 2 mothers, 2 daughters, 1 grandma and 1 grandaughter. How many people are there?"
};


//created questions 


 $("#1").on("click", function(){
 		
       	qfiled.html(questions.a);
        submit.on("click", function(){
		var userInput = parseInt(input.val());
		if (userInput === 10) {
	 		banner.text(userInput +" is " + right);
		} else {
		banner.html(wrong);
		}
});
       
       });



$("#2").on("click", function(){
 		banner.empty();
        qfiled.html(questions.b);
        submit.on("click", function(){
		var userInput = parseInt(input.val());
		if (userInput === 8) {
	 		banner.html(userInput +" is " + right);
		} else {
		banner.html(wrong);
		}
});
       
       });


$("#3").on("click", function(){
 		// qfiled.html(questions.a);
 		banner.empty();
        qfiled.html(questions.c);
        submit.on("click", function(){
		var userInput = parseInt(input.val());
		if (userInput === 1) {
	 		banner.html(userInput +" is " + right);
		} else {
		banner.html(wrong);
		}
});
       
       });

$("#4").on("click", function(){
 		// qfiled.html(questions.a);
 		banner.empty();
        qfiled.html(questions.d);
        show.on("click", function () {
			return banner.html("1 x 2 x 3 = 6 and 1 + 2 + 3 = 6 ");
		})
        submit.on("click", function(){
		var userInput = (input.val());
		if (userInput === "123") {
	 		banner.html(userInput +" is " + right);
		} else {
		banner.html(wrong);
		}
		
});
       
       });

$("#5").on("click", function(){
 		banner.empty();
        qfiled.html(questions.f);
        show.on("click", function () {
			return banner.html("7 cartons for larges boxes per carton, where 7 x 8 = 56 boxes. 4 for small boxes, where 4 x 10 = 40 boxes. 96 total boxes and 11 cartons");
		})
        submit.on("click", function(){
		var userInput = parseInt(input.val());
		if (userInput === 11) {
	 		banner.html(userInput +" is " + right);
		} else {
		banner.html(wrong);
		}
		
});
       
       });


       
$("#6").on("click", function(){
 		// location.reload();
 		banner.empty();
        qfiled.html(questions.g);
        show.on("click", function () {
				return banner.html("Once! Because after that it's not 100 anymore");
			});
        submit.on("click", function(){
		var userInput = parseInt(input.val());
		if (userInput === 1) {
	 		banner.html(userInput +" is " + right);
		} else {
		banner.html(wrong);
		}

		
});
       
       });

$("#7").on("click", function(){
 		// location.reload();
 		banner.empty();
        qfiled.html(questions.h);
        show.on("click", function () {
				return banner.html("3 people. one mother is the mother of another daughter. (2 mothers) another mother's child and her child. (2 daughters). 1grandma the oldest one there. 1 grandaughter the smallest.");
			});
        submit.on("click", function(){
		var userInput = parseInt(input.val());
		if (userInput === 3) {
	 		return banner.html(userInput +" is " + right);
		} else {
		return banner.html(wrong);
		}

		
});
       
       });






















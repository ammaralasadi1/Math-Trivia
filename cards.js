var banner = $(".banner");
var firstNumber = $(".question");

var input  = $(".result")
var submit = $("#submit");

var right = ("You are correct!");
var wrong = ("Try again!")


var questions = {
	a: 2 + 8, 
	b: 5 + 3, 
	c: 5 + 6,
	d: 6 - 6,
	f: 8 * 8

};
//created questions 


 submit.on("click", function(){
        updateBanner();
       
       });

var updateBanner = function() {
	// var userInput = parseInit(input.val());
	var userInput = parseInt(input.val());
	if (userInput === questions.a) {
		banner.html(right);
	} else {
		banner.html(wrong);
	}
}

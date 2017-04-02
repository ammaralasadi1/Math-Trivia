var banner = $(".banner"); 
var qfiled = $(".question");
var input  = $(".result")
var submit = $("#submit");
var next = $("#next");
var start = $("#start");
var right = ("Correct!");
var wrong = ("Try again!")


var questions = {
	a: "8 + 2 = ?", 
	b: "5 + 3 = ?", 
	c: "5 + 6 = ?",
	d: 6 - 6,
	f: 8 * 8

};
//created questions 


 $("#1").on("click", function(){
 		
       	qfiled.html(questions.c);
        submit.on("click", function(){
		var userInput = parseInt(input.val());
		if (userInput === 11) {
	 		banner.html(userInput +" is " + right);
		} else {
		banner.html(wrong);
		}
});
       
       });



$("#2").on("click", function(){
 		// qfiled.html(questions.a);
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























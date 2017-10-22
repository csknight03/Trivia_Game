// Character objects
/* var MickeyMouse = { 

	answerOptions: ["Mickey Mouse", "Mighty Mouse", "Jerry Mouse", "Fievel Mousekewitz"],
	correctAnswer: "Mickey Mouse",
	characterIMG: url("")

};
*/

// Character variables to convert to objects
var MickeyMouseOptions = ["Mighty Mouse", "Mickey Mouse", "Jerry Mouse", "Fievel Mousekewitz"];
var correctMM = "MickeyMouse";
var MinnieMouseOptions = ["Miss Bianca", "Gaget Hackwrench", "Minnie Mouse", "Miss Kitty Mouse"];
var GoofyOptions = ["Dippy Dawg", "Pete", "Max Goof", "Gilbert Goof"];
var DonaldDuckOptions = ["Daffy Duck", "Donald Duck", "Darkwing Duck", "Scrooge McDuck"];
var DaisyDuckOptions = ["Daphne Duck", "Belle Duck", "", "Daisy Duck"];
var plutoOptions = ["Pluto", "Scooby Doo", "Snoopy", "Garfield"];

// Answer variables
var correctAnswers = 0;
var incorrectAnswers = 0;

$(document).ready(function() {
    // Hide 
    $(".wrapper").hide();

    // Onclick to begin game
    $(".beginGame").on("click", function() {
        $(".wrapper").show();
        $(".beginGame").hide();
        console.log("A button with the alert class was clicked!");

        // Countdown Timer
        var countDown = 30;

        var counter = setInterval(timer, 1000);

        function timer() {
            countDown = countDown - 1;
            if (countDown < 0) {
                clearInterval(counter);

                //Counter ended, do something here
                return;
            } else if (countDown <= 5)
                $("#countDown").css("color", "red");

            //Adds count timer to the screen
            $("#countDown").text(countDown + " secs");
        };

        // for (var i = 0; i < MickeyMouseOptions.length; i++) {
        //     $("#checkbox-inline").html('<label class="checkbox-inline">');
        //     $(".checkbox-inline").html('<input type="radio" name="selectedAnswer" value="option1" class="inlineCheckbox">');
        //     $(".inlineCheckbox").html('<span class="radioSpacing options">');
        //     $(".options").html(MickeyMouseOptions[i]);
        //     console.log(MickeyMouseOptions[i]);
        // }

    });

});
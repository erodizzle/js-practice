var userChoice = prompt("Please enter a number");
var computerChoice = Math.floor((Math.random() *50)+1);

var compare =function(userChoice, computerChoice){
	if (userChoice === computerChoice){
	alert("Congrats, you guessed it!");
	}
	else if (userChoice < computerChoice) {
	alert("Guess higher");
	}
	else if (userChoice > computerChoice){
	alert("Guess lower");
	}
};
compare(userChoice, computerChoice);
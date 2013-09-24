// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
function addSuffix(i){
	var lastDigit = i % 10;
	
	if (i == 1 && i != 11) {
	    return i + "st";
	  }else if (i == 2 && i != 12) {
	    return i + "nd";
	  }else if (i == 3 && i != 13) {
	    return i + "rd";
	  }else {
	return i + "th";
	}
}

function topChoices(){
	var arr = new Array("green", "red", "blue", "yellow", "orange", "purple", "white", "black", "brown", "pink", "violet", "magenta", "teal", "grey", "tan");
	var string = "";

	for (i = 0; i < arr.length; i++){
		string += "My " + addSuffix(i+1) + " choice";
		if (i == arr.length - 1){
			break;
		}
		string += ", ";
	}	
	return string;
}
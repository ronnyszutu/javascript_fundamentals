// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
function greaterNum(a, b){
	if (a == b){
		return "Both numbers are equal.";
	}else{
		greater = "The greater number of " + a + " and " + b + " is ";
		if (a > b){
			return greater += (a+".");
		}else if (b > a){
			return greater += (b+".");
		}
	}
}

greaterNum(5, 5);
greaterNum(1, 7);
greaterNum(9, 2);

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
function helloWorld(langCode){
	if (langCode == "jp"){
		return "こんにちは、世界中のみなさん.";
	}else if (langCode == "cn"){
		return "你好，世界.";
	}else {
		return "Hello, World.";
	}
}

helloWorld("jp");
helloWorld("cn");
helloWorld("lalalalala");

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.
function assignGrade(numberGrade){
	if (numberGrade > 90){
		return "A";
	}else if (numberGrade > 80){
		return "B";
	}else if (numberGrade > 70){
		return "C";
	}else if (numberGrade > 60){
		return "D";
	}else if (numberGrade > 50){
		return "E";
	}else {
		return "F";
	}
}

assignGrade(45);
assignGrade(55);
assignGrade(65);
assignGrade(75);
assignGrade(85);
assignGrade(95);

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
function pluralize(noun, number){
	var str = number + " ";
	var doesNotChange = new Array("barracks", "deer", "fish", "gallows", "means", "offspring", "series", "sheep", "species");

	if ((number == 1) || (doesNotChange.indexOf(noun) >= 0)){
		return str + noun;
	}else {
		var irregular = new Array("addendum", "addenda", "alga", "algae", "alumnus", "alumni", "amoeba", "amoebae", "antenna", "antennae", "bacterium", "bacteria", "cactus", "cacti", "curriculum", "curricula", "datum", "data", "fungus", "fungi", "genus", "genera", "larva", "larvae", "memorandum", "memoranda", "stimulus", "stimuli", "syllabus", "syllabi", "vertebra", "vertebrae", "echo", "echoes", "embargo", "embargoes", "hero", "heroes", "potato", "potatoes", "tomato", "tomatoes", "torpedo", "torpedoes", "veto", "vetoes", "foot", "feet", "goose", "geese", "louse", "lice", "man", "men", "mouse", "mice", "tooth", "teeth", "woman", "women", "axis", "axes", "analysis", "analyses", "basis", "bases", "crisis", "crises", "diagnosis", "diagnoses", "ellipsis", "ellipses", "emphasis", "emphases", "hypothesis", "hypotheses", "neurosis", "neuroses", "oasis", "oases", "paralysis", "paralyses", "parenthesis", "parentheses", "thesis", "theses", "appendix", "appendices", "index", "indices", "matrix", "matrices");
		if (irregular.indexOf(noun) >= 0){
			if (irregular.indexOf(noun) % 2 == 0){
				return str + irregular[irregular.indexOf(noun) + 1];
			} else {
				return str + irregular[irregular.indexOf(noun)];
			}
		} else {
			return str + noun + "s";
		}
	}
}

pluralize("barracks", 1);
pluralize("barracks", 5);
pluralize("addendum", 1);
pluralize("addendum", 5);
pluralize("addenda", 1);
pluralize("addenda", 5);
pluralize("shirt", 1);
pluralize("shirt", 5);
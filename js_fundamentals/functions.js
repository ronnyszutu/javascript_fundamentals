// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numberOfChildren, partnersName, geographicLocation, jobTitle){
	return "You will be a " + jobTitle + ", and married to " + partnersName + " with " + numberOfChildren + " kids.";
}

tellFortune(3, "Jessica Alba", "Toronto", "programmer");
tellFortune(4, "Kristin Kreuk", "Markham", "web developer");
tellFortune(6, "Scarlett Johansson", "Seattle", "professional gamer");

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthYear){
	dateObj = new Date();
	currentYear = dateObj.getFullYear();
	return "They are either " + (currentYear - birthYear) + " or " + (currentYear - birthYear - 1);
}

calculateAge(1985);
calculateAge(1960);
calculateAge(2001);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, maxAge, amountPerDay){
	var restOfLifeTotal = (maxAge - age) * amountPerDay;
	return "You will need " + Math.round(restOfLifeTotal) + " to last you until the ripe old age of " + maxAge;
}

calculateSupply(28, 80, 2.5);
calculateSupply(28, 80, 2.2);
calculateSupply(28, 80, 1.8);

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCirumference(radius){
	var circumference = 2 * 3.14 * radius;
	return "The circumference is " + circumference;
}

function calcArea(radius){
	var area = 3.14 * radius * radius;
	return "The area is " + area;
}

calcCirumference(5);
calcArea(5);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function celsiusToFahrenheit(celsius){
	var convertToFarenheit = (celsius * 9 / 5) + 32;
	return celsius + "°C is " + convertToFarenheit + "°F";
}

function fahrenheitToCelsius(fahrenheit){
	var convertToCelsius = (fahrenheit - 32) * 5 / 9;
	return fahrenheit + "°F is " + convertToCelsius + "°C";
}

celsiusToFahrenheit(20);
fahrenheitToCelsius(68);
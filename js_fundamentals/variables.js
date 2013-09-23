// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var numOfChildren = 3;
//>> undefined
numOfChildren;
//>> 3
var partnersName = "Jessica Alba";
//>> undefined
partnersName;
//>> "Jessica Alba"
var geographicLocation = "Toronto";
//>> undefined
geographicLocation;
//>> "Toronto"
var jobTitle = "programmer";
//>> undefined
jobTitle;
//>> "programmer"
var fortune = "You will be a " + jobTitle + ", and married to " + partnersName;
//>> undefined
fortune += " with " + numOfChildren + "kids."
//>> "You will be a programmer, and married to Jessica Alba with 3kids."
fortune = "You will be a " + jobTitle + ", and married to " + partnersName + " with " + numOfChildren + " kids.";
//>> "You will be a programmer, and married to Jessica Alba with 3 kids."
fortune;
//>> "You will be a programmer, and married to Jessica Alba with 3 kids."

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2013;
//>>undefined
currentYear;
//>>2013
var birthYear = 1985;
//>>undefined
birthYear;
//>>1985
currentYear - birthYear;
//>>28
currentYear - birthYear - 1;
//>>27
"They are either " + (currentYear - birthYear) + " or " + (currentYear - birthYear - 1);
//>>"They are either 28 or 27"

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 27;
//>>undefined
var maxAge = 80;
//>>undefined
var amountPerDay = 2;
//>>undefined
var restOfLifeTotal = (maxAge - currentAge) * 2;
//>>undefined
"You will need " + restOfLifeTotal + " to last you until the ripe old age of " + maxAge;
//>>"You will need 106 to last you until the ripe old age of 80"

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 5;
//>>undefined
var circumference = 2 * 3.14 * radius;
//>>undefined
"The circumference is " + circumference;
//>>"The circumference is 31.400000000000002"
var area = 3.14 * radius * radius;
//>>undefined
"The area is " + area;
//>>"The area is 78.5"

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 17;
//>>undefined
var convertToFarenheit = (celsius * 9 / 5) + 32;
//>>undefined
convertToFarenheit;
//>>62.6
celsius + "°C is " + convertToFarenheit + "°F";
//>>"17°C is 62.6°F"
var fahrenheit = 62.6;
//>>undefined
var convertToCelsius = (fahrenheit - 32) * 5 / 9;
//>>undefined
fahrenheit + "°F is " + convertToCelsius + "°C";
//>>"62.6°F is 17°C"
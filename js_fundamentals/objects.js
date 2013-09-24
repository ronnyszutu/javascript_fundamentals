// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
var recipe = {
	title: "Pork and chive dumplings",
	servings: 2,
	ingredients: ["pork", "chives", "dumpling wraps"]
};

console.log(recipe.title);
console.log("Serves: " + recipe.servings);
console.log("Ingredients:");
for (i = 0; i < recipe.ingredients.length; i++){
	console.log(recipe.ingredients[i]);
}

// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
var myBooks = [
	{title: "Ender's Game", 
	 author: "Orson Scott Card" , 
	 alreadyRead: true},
	{title: "A Storm of Swords", 
	 author: "George R.R. Martin" , 
	 alreadyRead: true},
	{title: "The Time Traveler's Wife", 
	 author: "Audrey Niffenegger" , 
	 alreadyRead: true}, 
	{title: "The Hitchhiker's Guide to the Galaxy", 
	 author: "Douglas Adams" , 
	 alreadyRead: false},
	{title: "The Zombie Survival Guide", 
	 author: "Max Brooks" , 
	 alreadyRead: false}
];

for (var i = 0; i < myBooks.length; i++){
	console.log(myBooks[i].title + " by " + myBooks[i].author);
}

for (var j = 0; j < myBooks.length; j++){
	if (myBooks[j].alreadyRead == true){
		console.log("You already read " + myBooks[j].title + " by " + myBooks[j].author);
	} else if (myBooks[j].alreadyRead == false) {
		console.log("You still need to read " + myBooks[j].title + " by " + myBooks[j].author);
	}
}


// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."




// function statement

// this is a function statement, when creating excuetion context, it will be sitting in memery and be ariablve to you, 
// you can invoke this function even before the function definition
function greet() {
	console.log('hi');
}
greet();

// functions are first-class
// meaning you can pass function around as pamameters
function logGreeting(fn) {
	fn();
}
logGreeting(greet);

// function expression
// this is intresting, it will get hositing when excuetion context creation phrace, meaning you get undefined
// when code did not reach this line
var greetMe = function() {
	console.log('Hi Tony!');
}
greetMe();

// it's first-class
// pass a varible to it, the varibla points to a function
logGreeting(greetMe);

// use a function expression to create a function on the fly
// you can't do this in other programing langugaes, which why js is so cool
logGreeting(function() {
	console.log('Hello Tony!');
});
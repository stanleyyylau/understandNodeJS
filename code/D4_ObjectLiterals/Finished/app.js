// using object literial to create object
// so much faster

var person = {
	firstname: 'John',
	lastname: 'Doe',
	greet: function() {
		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
	}
};

person.greet();


// instead of the standard dot, 
//you can also use brackets to access your object 
console.log(person['firstname']);
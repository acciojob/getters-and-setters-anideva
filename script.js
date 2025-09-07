//complete this code
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	//getter for the name 
	get name(){
		return this.name;
	}

	//getter for the age 
	get age(){
		return this.age;
	}

	//setter for the age
	set age(newAge){
		this.age = newAge;
	}
}

class Student extends Person {
	constructor (name,age) {
		super(name,age); //parent constructor seh call kar raha hai 
	}

	study(){
		console.log(`${this.name} is studying `);
	}
}

class Teacher extends Person {
	constructor(name,age) {
		super(name,age); //yeh bhi main constructor seh call kar raha hai 
	}

	teach() {
		console.log(`{this.name} is teaching `);
	}
}



// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

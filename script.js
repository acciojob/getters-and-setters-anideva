//complete this code
class Person {
	constructor(name,age){
		this._name = name;
		this._age = age;
	}
	//getter for the name 
	get name(){
		return this._name;
	}

	//getter for the age 
	get age(){
		return this._age;
	}

	//setter for the age
	set age(newAge){
		this._age = newAge;
	}
}

class Student extends Person {
	constructor (name,age) {
		super(name,age); //parent constructor seh call kar raha hai 
	}

	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name,age) {
		super(name,age); //yeh bhi main constructor seh call kar raha hai 
	}

	teach() {
		console.log(`${this.name} is teaching`);
	}
}



// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

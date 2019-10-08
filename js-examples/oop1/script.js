/* Hello World Example */

/*function Person(name, age) {

	this.name = name;
	this.age = age;
	this.result = function() {
		console.log(this.name, this.age);
	}
}
new Person("John", 20).result();*/

/* Simple object */

/*var simpleObject = {
	id: 1,
	'name': 'John'
}*/

// console.log(simpleObject);
/*simpleObject.id = 2;
console.log(simpleObject.id);*/

/*simpleObject.age = 3;
console.log(simpleObject.age);*/

/*TODO add Teams n Employees objects n clases (using Function Expression)*/


var employee_1 = {
	id: 1,
	firstName: "Иван",
	lastName: "Иванов",
	patronymic: "Иванович",
	salary: 10000,
	teamId: 3
}
var employee_2 = {
	id: 2,
	firstName: "Петр",
	lastName: "Петров",
	patronymic: "Петрович",
	salary: 7000,
	teamId: 1
}
console.log(employee_1);
console.log(employee_2);

function Team(id, name, staffCount){
	this.id = id;
	this.name = name;
	this.staffCount = staffCount;
}

var team_1 = new Team(1, "отдел закупок", 7);
var team_2 = new Team(2, "отдел продаж", 6);
var team_3 = new Team(3, "отдел маркетинга", 4);

function Employee(id, firstName, lastName, patronymic, salary, teamId){
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.patronymic = patronymic;
	this.salary = salary;
	this.teamId = teamId;
}

var employee_3 = new Employee(3, "Семен", "Курочкин", "Викторович", 12000, 1);
var employee_4 = new Employee(4, "Инна", "Михалева", "Аркадьевна", 20000, 1);
var employee_5 = new Employee(5, "Виктория", "Таранова", "Ивановна", 7000, 1);
console.log(employee_3);
console.log(employee_4);
console.log(employee_5);

var employee_6 = new Employee(6, "Игорь", "Терешков", "Петрович", 25000, 2);
var employee_7 = new Employee(7, "Станслав", "Шевченко", "Эдуардович", 21000, 2);
var employee_8 = new Employee(8, "Павел", "Силантьев", "Олегович", 17000, 2);
console.log(employee_6);
console.log(employee_7);
console.log(employee_8);

var employee_9 = new Employee(9, "Ирина", "Толстых", "Андреевна", 19000, 3);
var employee_10 = new Employee(10, "Александр", "Горновой", "Николаевич", 11000, 3);
var employee_11 = new Employee(11, "Олег", "Стольный", "Викторович", 8000, 3);
console.log(employee_9);
console.log(employee_10);
console.log(employee_11);
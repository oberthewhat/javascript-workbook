//******************************************** */
//  Project 1


// let numbers = 0;
// do {
//   numbers += 1;
//   console.log(numbers);
// } while (numbers < 1000);


let person = {
	firstName: 'John',
	lastName: 'Tuber',
	birthDate: 'June 22, 1987',
	gender: 'Male'
}

for (birthDate in person){
  if (person.birthDate % 2 != 0){
		console.log(person.birthDate)
		break;
	}
}

let arrayOfPersons = [
	{
		firstName: 'John',
		lastName: 'Tuber',
		birthDate: 'June 22, 1987',
		gender: 'Male'
	},
	{
		firstName: 'David',
		lastName: 'Bille',
		birthDate: 'April 27, 1987',
		gender: 'Male'
	},
	{
		firstName: 'Mallory',
		lastName: 'Obertubbesing',
		birthDate: 'April 28, 1989',
		gender: 'Female'
	},
	{
		firstName: 'Millie',
		lastName: 'Obertubbesing',
		birthDate: 'June 24, 2018',
		gender: 'Female'
	}
]

arrayOfPersons.map((details => {
	console.log(details)
}))


let males = arrayOfPersons.filter(gender => gender == 'Male');

console.log(males)



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
console.log("*********************************************************")

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

arrayOfPersons.map(((details, index) => {
	console.log(details, index)
}))
console.log("*********************************************************")

// ()=>{}  this is a phat arrow function


 let array2 = arrayOfPersons.filter((males) => {

	return males.gender == 'Male'
})

console.log(array2)
console.log("*********************************************************")


let array3 = arrayOfPersons.filter((bd) => {
	return bd.birthDate.split(' ')[2] <= 1990

})

console.log(array3)

'use strict';
let arrayOfUsers = [];

window.onload = function() {
	getUsers();
	
}


const getUsers = () => {
	fetch('https://randomuser.me/api/?results=5')
	.then(fetched => fetched.json())  //takes in what is fetched and turns it into a JSON file
	.then(users => {   //takes that json file and makes available into a function
		arrayOfUsers = users
		console.log(users.results)
	})	

}


const list = () => {	
	
	const peopleList = document.getElementById('listOfPeople')
	const peoplePhoto = document.getElementById('images')
	
    for(let i = 0; i < arrayOfUsers.results.length; i++ ) {
		const li = document.createElement('li')
		const image = document.createElement('img')
		const button = document.createElement('button')
		image.src = arrayOfUsers.results[i].picture.thumbnail
		const text = document.createTextNode(`${arrayOfUsers.results[i].name.first}  ${arrayOfUsers.results[i].name.last}`)
		button.innerHTML = 'Details'
		button.addEventListener('click', function() {
			details(arrayOfUsers.results[i])
		})
		li.appendChild(text)
		peopleList.append(li)
		peoplePhoto.append(image)
		li.append(button)

  }
}

const details = (result) => {
			const moreInfo = document.getElementById('deets')
			const removeInfo = document.createElement('button')
			const age = document.createTextNode(` Age: ${result.dob.age}`)
			const address = document.createTextNode(` Address: ${result.location.city}, ${result.location.state}`)
			const phone = document.createTextNode(` Phone: ${result.cell}`)
			phone.innerHTML = `Phone: ${result.cell}`
			removeInfo.innerHTML = 'Hide'
			removeInfo.addEventListener('click', function() {
				document.getElementById('deets').innerHTML = ''
			})
			moreInfo.append(phone, address, age, removeInfo)
	

		




}




// const listPeopleChoices = () => {
//   const listElement = document.getElementById('people')
//   arrOfPeople.map(person => {
//     const li = document.createElement("li")
//     const button = document.createElement("button")
//     button.innerHTML = "Make Player"
//     button.addEventListener('click', function() {makePlayer(person.id)} )
//     li.appendChild(button)
//     li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
//     listElement.append(li)
//   })
// }
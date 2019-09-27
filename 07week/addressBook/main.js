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
		console.log(arrayOfUsers.results[1].name)
	})
}

function displayInfo(){
users.forEach(users) {
 console.log(users.name)	
};
}



// const list = () => {
// 	const allPosts = document.getElementById('all-posts')
//   arrayOfUsers.map((name, picture) => {
//     const li = document.createElement('li')
//     const text = document.createElement(`${name} + ${picture}`)
//     li.appendChild(text)
//     allPosts.append(li)
//   })
// }


'use strict';
window.onload = function () {
	getBreweries()
}

const getBreweries = () => {
	fetch('https://randomuser.me/api/?results=5')
	.then(fetched => fetched.json())  //takes in what is fetched and turns it into a JSON file
	.then(breweries => {   //takes that json file and makes available into a function
		arrayOfBreweries = breweries
		console.log(arrayOfBreweries)
	})	

}

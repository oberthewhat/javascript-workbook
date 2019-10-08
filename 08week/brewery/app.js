'use strict';
window.onload = function () {
	getPokemon()
}

const pokemon = []
let image;

let rando = Math.floor((Math.random() * 100) + 1);

const getPokemon = () => {
	fetch(`https://pokeapi.co/api/v2/pokemon/${rando}`)
	.then(fetched => fetched.json())  
	.then(pokemon => {  
	image = pokemon.sprites.front_default
	})	

}


const PokeOff = () => {
	getPokemon()
	const left = document.getElementById('leftPoke');
	const right = document.getElementById('rightPoke');
	const imgLeft = document.createElement('img')
	imgLeft.src = "pokemon[0].sprites.front_default"
	console.log(imgLeft)
}
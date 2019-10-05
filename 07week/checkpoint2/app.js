'use strict';

// -Checkpoint 2 Dodge Ball!
// 20pts - Code Plan - Include this in a README.md file in your folder with comment in your code.

// 20pts - Can add People to Players - When clicked the people are added to the Players column and removed from the People list while getting new values of a player added to them.

// 20pts - Can add Players to different Teams - When we click on the blue button they Player is added to the blue team and removed from the Player list while also getting the keys color and mascot extended to them when they are moved to a team.

// 20pts - Uses Class - This is not a hack job. You should use class to add the new properties you need and extend when you need.

// 20pts - Make a button to remove Players from Teams and back to the Players list.

// Make a button to remove Player from the Players List and move them into the People List.

const arrOfPeople = [
  {
    id: 2,
    name: "Charles McDerkinstan",
    age: 55,
    skillSet: "Duck Breeder",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Andrew Judy",
    age: 32,
    skillSet: "Offsides official",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Millie Obertubbesing ",
    age: 20,
    skillSet: "Collecting items in one hand",
    placeBorn: "Austin, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "As honest as they come",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Adam Darrenkamp",
    age: 17,
    skillSet: "looking good",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "shimlock Kelter",
    age: 32,
    skillSet: "Makes a mean bowl of cereal",
    placeBorn: "New Orleans, Louisiana"
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class player {
  constructor(player){}
}

class blueTeammate extends player {
  constructor(){
    this.color = 'blue'
    super(player)
  }
}

class redTeammate extends player {
  constructor(){
    this.color = 'red'
    super(player)
  }
}

//dispalys the list of players when the button is clicked, also creates a button for the user to move the person into the players array. 
const listPeopleChoices = () => {
  console.log('original array of people', arrOfPeople)
  const remButt = document.getElementById('listButton')
  remButt.style.display = 'none' //removes the button to move display more players
  const listElement = document.getElementById('people')
  listElement.innerHTML = ''//removes player from the list after selected
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"

    //adds the button function for making a player, passes the person at the id into the make player function. splices the person from the array of people.
    button.addEventListener('click', function() {
      makePlayer(person.id)
      arrOfPeople.splice(arrOfPeople.indexOf(person), 1)
      listPeopleChoices()
      
    })
    //appends the button and the person name and skill to the list on the DOM
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

//the function that is called when a user presses make player.
const makePlayer = (id) => {
  new player()
  const playersSection = document.getElementById('players')
  //maps through the array of people and compares it to what was selected from the list of people choices. Pushes that person to the list of players array
  arrOfPeople.map(person => { 
    if(id === person.id){
    listOfPlayers.push(person)
    console.log('listOfPlayers after added to list of players', listOfPlayers)
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Remove"
    //makes a button to remove the plater from the player list and put back into the array of people.
    button.addEventListener('click', function() { 
      const popped = listOfPlayers.splice(listOfPlayers.indexOf(person),1)
      arrOfPeople.push(popped[0])
      listPeopleChoices()
      playersSection.removeChild(li)
      console.log('listOfPlayers after removed from player list', listOfPlayers)
    })
    //create a blue button for users to chose which team.
    const blueButt = document.createElement("button")
    blueButt.innerHTML = "B";
    blueButt.style.backgroundColor='#1E35F7'
    //adds a function for the button when clicked to move the player to the blue team and remove from the player list.
    blueButt.addEventListener('click', function() {
      makeBlue()
      playersSection.removeChild(li)
    })
    //create a red button for users to send player to red team.
    const redButt = document.createElement("button")
    redButt.innerHTML = "R"
    redButt.style.backgroundColor = "#F71E35"
    redButt.addEventListener('click', function() {
      makeRed()
      // listOfPlayers.splice(person[0])
      playersSection.removeChild(li)
    })
    //appends the buttons and player info into the DOM
    li.appendChild(button)
    li.appendChild(blueButt)
    li.appendChild(redButt)
    li.appendChild(document.createTextNode(" - " + person.name + " - " + person.skillSet))
    playersSection.appendChild(li)
  }})}
  
const makeRed = () => {
  document.getElementById('players')
  const redList = document.getElementById('red')
  listOfPlayers.map(person => { 
    redTeam.push(person)
    listOfPlayers.splice(listOfPlayers.indexOf(person), 1)
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Remove"
    console.log('redTeam array after player added ', redTeam)
    console.log('listOfplayers after added to redTeam', listOfPlayers)
    button.addEventListener('click', function() { 
      redTeam.splice(redTeam.indexOf(person),0)
      redList.removeChild(li)
      arrOfPeople.push(person)
      makePlayer(person.id)
      console.log('red team array after removed' , redTeam)
      console.log(' listOfPlayers after removed from team ' , listOfPlayers)
      console.log('arrOfPeople after removed from red', arrOfPeople)
    })
    li.appendChild(button)
    li.appendChild(document.createTextNode(" - " + person.name + " - " + person.skillSet))
    redList.appendChild(li)
  })}



  const makeBlue = () => {
    document.getElementById('players')
    const blueList = document.getElementById('blue')
    listOfPlayers.map(person => { 
      blueTeam.push(person)
      listOfPlayers.splice(listOfPlayers.indexOf(person), 1)
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Remove"
      button.addEventListener('click', function() { 
        blueTeam.splice(blueTeam.indexOf(person),1)
        blueList.removeChild(li)
        arrOfPeople.push(person)
        makePlayer(person.id)
        console.log('remove from blue team button pressed ',listOfPlayers)
      })
      li.appendChild(button)
      li.appendChild(document.createTextNode(" - " + person.name + " - " + person.skillSet))
      blueList.appendChild(li)
    })}
  
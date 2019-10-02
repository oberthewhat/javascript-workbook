'use strict';

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
    age: 35,
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
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
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

const playerArrCheck = () => {
  for(let i=0;i<listOfPlayers.length;i++){
    console.log(listOfPlayers[i])
  }
}

const listPeopleChoices = () => {
  const remButt = document.getElementById('listButton')
 remButt.style.display = 'none'
  const listElement = document.getElementById('people')
  listElement.innerHTML = ''
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {
      makePlayer(person.id)
      arrOfPeople.splice(arrOfPeople.indexOf(person), 1)
      listPeopleChoices()
      
    })
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

const makePlayer = (id) => {
  const playersSection = document.getElementById('players')
  arrOfPeople.map(person => { 
    if(id === person.id){
    listOfPlayers.push(person)
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Remove"
    button.addEventListener('click', function() { 
      const popped = listOfPlayers.splice(listOfPlayers.indexOf(person),1)
      arrOfPeople.push(popped[0])
      
      listPeopleChoices()
      playersSection.removeChild(li)

    })
    console.log('this shows the array of people' , arrOfPeople)
    console.log('this shows the array of players' , listOfPlayers)
    const blueButt = document.createElement("button")
    blueButt.innerHTML = "B";
    blueButt.style.backgroundColor='#1E35F7'
    blueButt.addEventListener('click', function() {
      console.log('blue clicked')
      makeBlue()
      playersSection.removeChild(li)
    })
    const redButt = document.createElement("button")
    redButt.innerHTML = "R"
    redButt.style.backgroundColor = "#F71E35"
    redButt.addEventListener('click', function() {
      console.log('red clicked')
      makeRed()
      listOfPlayers.splice(person[0])
      playersSection.removeChild(li)
    })
    
    li.appendChild(button)
    li.appendChild(blueButt)
    li.appendChild(redButt)
    li.appendChild(document.createTextNode(" - " + person.name + " - " + person.skillSet))
    playersSection.appendChild(li)
  }})}
  
const makeRed = () => {
  const playersSection = document.getElementById('players')
  const redList = document.getElementById('red')
  
  listOfPlayers.map(person => { 
    redTeam.push(person)
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Remove"
    button.addEventListener('click', function() { 
      const popped = redList.splice(redList.indexOf(person),1)
      listOfPlayers.push(popped[0])
      redList.removeChild(li)

    })

    li.appendChild(button)
    li.appendChild(document.createTextNode(" - " + person.name + " - " + person.skillSet))
    redList.appendChild(li)
  })}



  const makeBlue = () => {
    const playersSection = document.getElementById('players')
    const blueList = document.getElementById('blue')
    
    listOfPlayers.map(person => { 
      redTeam.push(person)
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Remove"
      button.addEventListener('click', function() { 
        const popped = redList.splice(redList.indexOf(person),1)
        listOfPlayers.push(popped[0])
        blueList.removeChild(li)
  
      })
  
      li.appendChild(button)
      li.appendChild(document.createTextNode(" - " + person.name + " - " + person.skillSet))
      blueList.appendChild(li)
    })}
  
'use strict';


var containerGenerateRandomGame = document.getElementById('js-generate-random-game');

// Container variable for random game generator on the home page
var containerGenerateRandomGame = document.getElementById('js-generate-random-game');

// Variables for JavaScript elements on search.html
var containerGameSearchResults = document.getElementById('js-game-search-results');
var containterPickGameForm = document.getElementById('js-pick-game-form');
var buttonGameSearchSubmit = document.getElementById('js-game-search-submit');

// Variables for JavaScript elements on update.html
var containerUserGames = document.getElementById('js-user-games-container');
var containerBuiltInGameLibrary = document.getElementById('js-built-in-game-library');

// This is the constructor function that builds our board games.
var listOfGames = [];
function BuildGameItem(gameName, minPlayers, maxPlayers, minAge, intoxicated, time, rating, gameDescription, gameID, userGame){
  this.gameName = gameName;
  this.minPlayers = minPlayers;
  this.maxPlayers = maxPlayers;
  this.minAge = minAge;
  this.intoxicated = intoxicated;
  this.time = time;
  this.rating = rating;
  this.gameDescription = gameDescription;
  this.gameID = gameID;
  this.userGame = userGame;

  listOfGames.push(this);
}

// Function to replace instantiatians of buildListOfGames

function buildInitialListOfGames() {
  for(var i=0; i < dataForPreSelectedGames.length; i++) {
    var indexGameID = 'gameId' + dataForPreSelectedGames[i];
    new BuildGameItem(dataForPreSelectedGames[i][0], dataForPreSelectedGames[i][1],dataForPreSelectedGames[i][2], dataForPreSelectedGames[i][3],dataForPreSelectedGames[i][4],dataForPreSelectedGames[i][5],dataForPreSelectedGames[i][6],dataForPreSelectedGames[i][7], 'gameId' + [i],false);
  }
}
//This should be called only when local storage blank
buildInitialListOfGames();

//**check local storage **
function checkLocalStorage (){
  if (window.localStorage.length !==0){
    var storedUserGame = localStorage.getItem('stored list of games');
    var parsedUserGame= JSON.parse(storedUserGame);
    listOfGames= parsedUserGame;
  }
}

//**local storage function to store listofGames array**
function updateLocalStorage(){
  var storedUserGame= JSON.stringify(listOfGames);
  localStorage.setItem('stored list of games', storedUserGame);
}

// **this variable can be deleted, here for testing function only, to represent the number of games from BuildGameItem constructor.**
var gameDataArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  18,
  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29
];

// **this function below is going to take our game array and shuffle it as well as use math.random to ensure that there are no duplicate items. This is especially helpful if we choose to return more than one iter. However; this may not be useful at all for single item returns.**

var getRandomGameArrayElement = function (arr) {
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - 1,
    // **line 14 can be adjusted to return any number of elements by changing the -1 to another number**
    temp, index;

  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;

    var randomGameArray = (shuffled.slice(min));
  }
};
getRandomGameArrayElement(gameDataArray);

// render game item html
function renderGameItem (gameItemIndex){
  var gameItemContainer = document.createElement('article');
  var gameItemContent = '<h2>'+ gameItemIndex.gameName + '</h2><p class="features"><i class="fa fa-user"></i>' + gameItemIndex.minPlayers + '-' + gameItemIndex.maxPlayers +' <i class="fa fa-clock-o"></i>'+ gameItemIndex.time +' <i class="fa-arrow-circle-up"></i>'+ gameItemIndex.minAge +' years and up</p><p class="description">' + gameItemIndex.gameDescription + '</p>' ;

  gameItemContainer.id = gameItemIndex.gameID;
  gameItemContainer.setAttribute('class','game-item');
  gameItemContainer.innerHTML = gameItemContent;
  return gameItemContainer;
}

// check if userGame = true and inside call render function
function userGameTrueCheck(){
  for(var i = 0; i < listOfGames.length; i++){
    var renderedGame = renderGameItem(listOfGames[i]);
    if(listOfGames[i].userGame === true){
      containerUserGames.appendChild(renderedGame);
    } else {
      containerBuiltInGameLibrary.appendChild(renderedGame);
    }
  }
}

//event listener on home page for getRandomGameArrayElement
function renderRandomGame (){
  console.log('butt');
}

userGameTrueCheck();
var randomGameButton = document.getElementById('js-generate-random-game-button');
randomGameButton.addEventListener('click', renderRandomGame);

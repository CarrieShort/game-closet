'use strict';
var listOfGames = [];

var listOfUserGames = [];

var containerGenerateRandomGame = document.getElementById(
  'js-generate-random-game');

// Container variable for random game generator on the home page
var containerGenerateRandomGame = document.getElementById(
  'js-generate-random-game');

// Variables for JavaScript elements on search.html
var containerGameSearchResults = document.getElementById(
  'js-game-search-results');
var formGameSearchInputs = document.getElementById('js-pick-game-form');
var buttonGameSearchSubmit = document.getElementById('js-game-search-submit');

// Variables for JavaScript elements on update.html
var containerUserGames = document.getElementById('js-user-games-container');
var containerBuiltInGameLibrary = document.getElementById(
  'js-built-in-game-library');

// Variables for event listeners
var randomGameButton = document.getElementById('js-generate-random-game-button');
var containerGameItem = document.getElementsByClassName('game-item');

//Variable for mobile menu event listener
var buttonMobileMenu = document.getElementById('js-mobile-menu-button');
var containerMobileMenu = document.getElementById('js-mobile-menu');
// This is the constructor function that builds our board games.
function BuildGameItem(gameName, minPlayers, maxPlayers, minAge, intoxicated,
  time, rating, gameDescription, gameID, userGame) {
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
  for (var i = 0; i < dataForPreSelectedGames.length; i++) {
    new BuildGameItem(dataForPreSelectedGames[i][0], dataForPreSelectedGames[i]
      [1], dataForPreSelectedGames[i][2], dataForPreSelectedGames[i][3],
      dataForPreSelectedGames[i][4], dataForPreSelectedGames[i][5],
      dataForPreSelectedGames[i][6], dataForPreSelectedGames[i][7], 'gameId' + [
        i
      ], false);
  }
}

//**check local storage **
function checkLocalStorage(keyName) {
  if (window.localStorage.length !== 0) {
    var storedUserGame = localStorage.getItem(keyName);
    var parsedUserGame = JSON.parse(storedUserGame);
    return parsedUserGame;
  }
  return 'none';
}

//**local storage function to store listofGames array**
function updateLocalStorage(arrayToBeStored, keyName) {
  var storedUserGame = JSON.stringify(arrayToBeStored);
  localStorage.setItem(keyName, storedUserGame);
}


function buildListOfUserGames() {
  for (var i = 0; i < listOfGames.length; i++) {
    if (listOfGames[i].userGame === true) {
      listOfUserGames.push(listOfGames[i]);
    }
  }
}
// **this function below is going to take our game array and shuffle it as well as use math.random to ensure that there are no duplicate items.**

function getRandomGameArrayElement(arr) {
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - 1,
    temp, index;

  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;

    var randomGameArray = (shuffled.slice(min));
    return randomGameArray;
  }
}

// render game item html
function renderGameItem(gameItemIndex) {
  var gameItemContainer = document.createElement('article');
  var gameItemContent = '<h3>' + gameItemIndex.gameName +
    '</h3><p class="features"><i class="fa fa-user"></i>' + gameItemIndex.minPlayers +
    '-' + gameItemIndex.maxPlayers + ' <i class="fa fa-clock-o"></i>' +
    gameItemIndex.time + ' <i class="fa fa-arrow-circle-up"></i>' +
    gameItemIndex.minAge + ' years and up</p><p class="description">' +
    gameItemIndex.gameDescription + '</p>';

  gameItemContainer.id = gameItemIndex.gameID;
  gameItemContainer.setAttribute('class', 'game-item');
  gameItemContainer.innerHTML = gameItemContent;
  return gameItemContainer;
}

// Function that renders a random game from the listOfGames array
function renderRandomGame() {
  var randomGameArray = getRandomGameArrayElement(listOfGames);
  var randomResult = renderGameItem(randomGameArray[0]);
  if (containerGenerateRandomGame) {
    containerGenerateRandomGame.textContent = '';
    containerGenerateRandomGame.appendChild(randomResult);
  }
}

// This function checks if the games are in the user or public library and renders them in the correct location on update.html
function userGameTrueCheck() {
  containerUserGames.textContent = '';
  containerBuiltInGameLibrary.textContent = '';
  for (var i = 0; i < listOfGames.length; i++) {
    var renderedGame = renderGameItem(listOfGames[i]);
    console.log('this is list of games i .userGame', listOfGames[i].userGame);
    if (listOfGames[i].userGame === true) {
      if (containerUserGames) {
        containerUserGames.appendChild(renderedGame);
      }
    } else {
      if (containerBuiltInGameLibrary) {
        containerBuiltInGameLibrary.appendChild(renderedGame);
      }
    }
  }
}

function renderSearchResults(array) {
  containerGameSearchResults.textContent = '';
  for (var i = 0; i < array.length; i++) {
    var renderedGame = renderGameItem(array[i]);
    containerGameSearchResults.appendChild(renderedGame);

  }
}
//event listeners for update.html
function toggleUserGameValue(toggleTarget) {
  if (toggleTarget.userGame === true) {
    toggleTarget.userGame = false;
    // console.log(listOfGames[i]);
  } else {
    toggleTarget.userGame = true;
    // console.log(listOfGames[i]);
  }
}

function moveGameItem() {
  var clickedId = this.id;
  (clickedId);
  for (var i = 0; i < listOfGames.length; i++) {
    if (clickedId === listOfGames[i].gameID) {
      toggleUserGameValue(listOfGames[i]);
    }
  }
  updateLocalStorage(listOfGames, 'stored list of games');
  userGameTrueCheck();
  addListenerToLibrary();
}
// **This function will create an array which will be of games that are to be played if user is drunk**/

function buildArrayOfDrunkGames() {
  var drunkArray = [];
  for (var i = 0; i < listOfGames.length; i++) {
    var gameItem = listOfGames[i];
    if (gameItem.intoxicated === 'true') {
      drunkArray.push(listOfGames[i]);
    }
  }
  return drunkArray;
}
// **This function is checking for user game matches based on game library data and user form entries.**

function checkForMatches(array, input1, input2, input3) {
  var searchResults = [];
  for (var i = 0; i < array.length; i++) {
    var gameItem = array[i];
    if (gameItem.minPlayers <= input1 && gameItem.maxPlayers >=
      input1) {
      if (gameItem.minAge <= input2) {
        if (gameItem.time === input3) {
          searchResults.push(gameItem);
        }
      }
    }
  }
  return searchResults;
}
// **This is the event handler for the submission of the form by user**
function searchFormDataHandler(event) {
  event.preventDefault();
  var inputPlayers = parseInt(event.target.players.value);
  var inputAge = parseInt(event.target.age.value);
  var inputTime = parseInt(event.target.time.value);
  var inputIntoxicated = event.target.intoxicated.value;

  var drunkGames = buildArrayOfDrunkGames();

  if (inputIntoxicated === 'true') {
    var drunkMatches = checkForMatches(drunkGames, inputPlayers, inputAge,
      inputTime);
    renderSearchResults(drunkMatches);
    updateLocalStorage(drunkMatches, 'stored list of search results');
  } else {
    var soberMatches = checkForMatches(listOfGames, inputPlayers, inputAge,
      inputTime);
    renderSearchResults(soberMatches);
    updateLocalStorage(soberMatches, 'stored list of search results');
  }
  var formValueArray = [inputPlayers, inputAge, inputTime, inputIntoxicated];
  updateLocalStorage(formValueArray, 'This is the search form data');
}

function toggleMobileMenu() {
  console.log(this.className);
  if (this.className === 'mobile-menu-open') {
    this.className = 'mobile-menu-closed';
    containerMobileMenu.style.display = 'none';
  } else {
    this.className = 'mobile-menu-open';
    containerMobileMenu.style.display = 'block';
  }
}

//Call local storage
var localStorageOnPageLoad = checkLocalStorage('stored list of games');
if (localStorageOnPageLoad != 'none') {
  listOfGames = localStorageOnPageLoad;
} else {
  //This should be called only when local storage blank
  buildInitialListOfGames();
}

// Call Render Functions
userGameTrueChesck();

buildListOfUserGames();


//Call listener Function
addListenerToLibrary();


//event listeners
// event listener home page
if (randomGameButton) {
  randomGameButton.addEventListener('click', renderRandomGame);
}

// event listener on user game closet library page
function addListenerToLibrary() {
  for (var i = 0; i < containerGameItem.length; i++) {
    console.log(containerGameItem[i]);
    console.log('add event listener function fired!');
    containerGameItem[i].addEventListener('click', moveGameItem);
  }
}

if (buttonMobileMenu) {
  buttonMobileMenu.addEventListener('click', toggleMobileMenu);
}

// event listener for search form
if (formGameSearchInputs) {
  formGameSearchInputs.addEventListener('submit', searchFormDataHandler);
}

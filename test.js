var formData = [];

function searchFormDataHandler(event) {
  event.preventDefault();
  var inputPlayers = parseInt(event.target.inputPlayers.value);
  var inputAge = parseInt(event.target.inputAge.value);
  var inputTime = event.target.matches('time');
  var intoxicated = event.target.onclick;


  for (var i = 0; i < listOfGames.length; i++) {

    if (minPlayers <= inputPlayers <= maxPlayers);
    if (minAge >= inputAge);
    if (time === inputTime);
    if (intoxicated === true);

    return (userGameMatches);
  }
}
formDataHandler();
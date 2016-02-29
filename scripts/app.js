'use strict';

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
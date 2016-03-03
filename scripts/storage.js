// JavaScript file that stores the game data and and stores the game builder constructor function
//descriptions of games cited from BoardGameGeek.com

'use strict';
//Array keys: gamename, minPlayers, maxPlayers, minAge, intoxicated, time, rating, description,
var dataApplesToApples = ['Apples to Apples', 4, 10, 12, 'false', 30, 6, 'The party game Apples to Apples consists of two decks of cards: Things and Descriptions. Each round, the active player draws a Description card  from the deck, then the other players each secretly choose the Thing card in hand that best matches that description and plays it face-down on the table. Once a player has won a pre-determined number of Description cards, that player wins.'];
var dataBalderdash = ['Balderdash', 2, 6, 12, 'true', 30, 6, 'Balderdash contains several cards with real words nobody has heard of. After one of those words has been read aloud, players try to come up with definitions that at least sound plausible, because points are later awarded for every opposing player who guessed that your definition was the correct one.'];
var dataBattleship = ['Battleship', 2, 2, 8, 'true', 30, 4.5, 'Each player deploys his ships (of lengths varying from 2 to 5 squares) secretly on a square grid. Then each player shoots at the other\'s grid by calling a location. The defender responds by "Hit!" or "Miss!". You try to deduce where the enemy ships are and sink them. First to do so wins.'];
var dataCandyland	= ['Candyland', 2, 2, 4,'false', 30, 3, 'Players take turns removing the top card from a stack.The deck has one card for each named location, and drawing such a card moves a player directly to that board location. The game is won by landing on or passing the final square and thus reaching the goal of the Candy Castle.'];
var dataCardsAgainstHumanity = ['Cards Against Humanity' ,4,	30,	17,	'true',	30,	6.5, 'Very similar to the popular and fairly inoffensive Apples to Apples. While the games are similar, the sense of humor required is very different. The game encourages players to poke fun at practically every awkward or taboo subject.'];
var dataCheckers = ['Checkers',	2,	2,	6,	'false',	30,	5, 'Pieces only move diagonally, and only one space at a time. If a player can move one of his pieces so that it jumps over an adjacent piece of their opponent and into an empty space, that player captures the opponent\'s disc. Jumping moves must be taken when possible, thereby creating a strategy game where players offer up jumps in exchange for setting up the board so that they jump even more pieces on their turn. A player wins by removing all of his opponent\'s pieces from the board or by blocking the opponent so that he has no more moves.'];
var dataChess =	['Chess', 2,	2,	6,	'false',	60,	7, 'Chess is a two-player, abstract strategy board game that represents medieval warfare on an 8x8 board with alternating light and dark squares. Players take turns moving one of their pieces in an attempt to capture, attack, defend, or develop their positions.'];
var dataClue =	['Clue' , 3,	6,	8,	'false',	45,	5, 'The classic detective game! In Clue, players move from room to room in a mansion to solve the mystery of: who done it, with what, and where? A great game for those who enjoy reasoning and thinking things out.'];
var dataCranium	= ['Cranium', 4,	16,	13,	'false',	60,	5.5, 'Cranium bills itself as the "whole-brain" game. It\'s a party game that borrows from a host of other popular party games of recent times.'];
var dataDominion =['Dominion', 2,	4,	12,	'false',	30,	8.5, 'In Dominion, each player starts with an identical, very small deck of cards. In the center of the table is a selection of other cards the players can "buy" as they can afford them. Through their selection of cards to buy, and how they play their hands as they draw them, the players construct their deck on the fly, striving for the most efficient path to the precious victory points by game end.'];
var dataDontWakeDaddy	= ['Don\'t Wake Daddy', 2, 4,	3, 'false',	20,	4, 'Children\'s game in which players move by drawing cards and moving to the matching space. If you land on a picture-number space then you have to risk waking Daddy. Daddy is in his bed, a spring-loaded molded plastic gizmo. If you did something that might cause him to stir, you have to press the snooze button on his alarm clock a specified number of times. Daddy might sleep through it... but he might sit up suddenly and send his nightcap flying. And send the kid who woke him up back to bed (the start).'];
var dataHungryHungryHippos = ['Hungry Hungry Hippos', 2,	4,	4, 'true',	10,	4, 'This children\'s game is as much of a toy as it is a game. Each player has a plastic hippo that is arranged around a plastic arena. When you push the tail it will reach its head onto the playing field - perhaps trapping one or more marbles to be pulled back to a private player marble gutter, perhaps just sending marbles bouncing around the playing field.'];
var dataJenga	= ['Jenga', 1,	8,	6,	'true',	20,	5,'Moving in Jenga consists of taking one and only one block from any story except the completed top story of the tower at the time of the turn, and placing it on the topmost story in order to complete it. The game ends when the tower falls in any significant way -- in other words, any piece falls from the tower, other than the piece being knocked out to move to the top. The loser is the person who made the tower fall and the winner is the person who moved before the loser.'];
var dataLife =	['Life', 2,	6,	8,	'false',	60,	4, 'This game attempts to mirror life events many people go through from going to college, raising a family, buying a home, working and retiring. The intent of the game is to have the most assets at the end of the game, assets are earned primarily by working and earning tokens with dollars amount on them.'];
var dataLoadedQuestions = ['Loaded Questions',	3,	6,	13,	'true',	45,	6, 'Hilarious board game that tests players on how well they know each other with over 500 fun personality-filled questions.'];
var dataMancala	= ['Mancala', 2,	2,	5,	'false',	10,	6, 'This entry is referencing only the popular game also known as Kalah, invented in the mid 20th century in America. The game ends when one player no longer has any seeds in any of his holes. The remaining pieces are captured by his adversary. The player who has captured most pieces is declared the winner.'];
var dataMonopoly	= [ 'Monopoly',2,	8,	8,	'false',	180,	4.5, 'Players take the part of land owners, attempting to buy and then develop their land. Income is gained by other players visiting their properties and money is spent when they visit properties belonging to other players. When times get tough, players may have to mortgage their properties to raise cash for fines, taxes and other misfortunes.'];
var dataMouseTrap	= ['Mouse Trap',2,	4	,6,	'true',	30,	4, 'Mouse Trap pits players against each other as mice trying to navigate through a complex mousetrap. They build the Rube Goldberg inspired mousetrap as they move their mice across the board. If the mousetrap doesn\'t malfunction, the mouse is captured and out of the game. The winner is the last mouse who avoids being trapped.'];
var dataPictionary = ['Pictionary',3,	16,	12,	'true',	90,	6, 'Playing Pictionary may remind you of Charades, but with drawing on paper instead of acting out the answers. In Pictionary, though, both teams\' (or even all three teams\') clue givers may be drawing at the same time as players strive to be the first to guess the correct answer. No great drawing talent is required. Pictionary was a big hit when it first appeared and has been a classic on the party game scene ever since.'];
var dataSettlersofCatan =	[ 'Settlers of Catan',2,	4,	7,	'false',	60,	7, 'This game uses the familiar Catan hex-tile grid to present a map of the United States. Players collect and trade resources in order to purchase, migrate and build settlements, forge railroads, and acquire locomotives.'];
var dataChutesandLadders = ['Chutes and Ladders',2,	4,	4,	'true',	30,	5, 'Classic game challenges you to scramble to the top of the game board without slip-sliding down!'];
var dataSorry =	['Sorry',2,4,	6, 'true',	30,	4.5, 'By turning over a card from the draw deck and following its instructions, players move their pieces around the game board, switch places with players, and knock opponents\' pieces off the track and back to their Start position.'];
var dataTaboo =	['Taboo',4,	10,	12,	'true',	20,	6, 'Taboo is a party word game. Players take turns describing a word or phrase on a drawn card to their partner without using five common additional words or phrases also on the card.'];
var dataTwister =	['Twister',2,	4,	6,	'true',	10 ,4.5, 'Each turn consists of the moderator spinning a spinner, which gives a result matching a random color with a random element from the set (left hand, right hand, left foot, right foot). Each player must put the relevant bodypart on the relevant color spot. If a player falls or touches an elbow or knee to the ground they are eliminated.'];
var dataTrivialPursuit= ['Trivial Pursuit',2,	24,	12,	'false',	90,	5, 'The goal of the game is to collect a pie in each color. The colors correspond to different question categories. Once the player has one pie in each color, she can move along the spokes to the middle of the board to win the game.'];
var dataTrouble	= ['Trouble',2,	4,	4,	'true',	45,	3.5, 'The game is abstract, each player has set of pawns of his color. Each turn player rolls a die using the Pop-O-Matic and selects one of his pawns to move.'];
var dataUno	= ['Uno',2,	10,	6	, 'true',	30,	5, 'Players race to empty their hands and catch opposing players with cards left in theirs, which score points. In turns, players attempt to play a card by matching its color, number, or word to the topmost card on the discard pile.'];
var dataYahtzee	= ['Yahtzee',2,	10,	6,'true',	30,	5, 'Each player tries to fill in a score for each category, but this is not always possible. When all players have entered a score or a zero for all 13 categories, the game ends and total scores are compared.'];
var dataScrabble =['Scrabble',	2,	4, 10,	'false',	90,	6.3, 'In this classic word game, players use their seven drawn letter-tiles to form words on the gameboard. Each word laid out earns points based on the commonality of the letters used, with certain board spaces giving bonuses.'];

var dataForPreSelectedGames = [dataApplesToApples,
dataBalderdash,
dataBattleship,
dataCandyland,
dataCardsAgainstHumanity,
dataCheckers,
dataChess,
dataClue,
dataCranium,
dataDominion,
dataDontWakeDaddy,
dataHungryHungryHippos,
dataJenga,
dataLife,
dataLoadedQuestions,
dataMancala,
dataMonopoly,
dataMouseTrap,
dataPictionary,
dataSettlersofCatan,
dataChutesandLadders,
dataSorry,
dataTaboo,
dataTwister,
dataTrivialPursuit,
dataTrouble,
dataUno,
dataYahtzee,
dataScrabble
];

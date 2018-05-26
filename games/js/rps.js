function initialize() {
	playerRockElement = document.getElementById("playerRock");
	playerPaperElement = document.getElementById("playerPaper");
	playerScissorsElement = document.getElementById("playerScissors");
	playerPickElement = document.getElementById("playerPick");
	computerRockElement = document.getElementById("computerRock");
	computerPaperElement = document.getElementById("computerPaper");
	computerScissorsElement = document.getElementById("computerScissors");
	computerPickElement = document.getElementById("computerPick");
	roundWinnerElement = document.getElementById("roundWinner");
	gameWinnerElement = document.getElementById("gameWinner");
	
	
	
	playerRock = 5;
	playerPaper = 5;
	playerScissors = 5;
	computerRock = 5;
	computerPaper = 5;
	computerScissors = 5;
	
	playerRockString = "Rock: " + computerRock;
	playerPaperString = "Paper: " + computerPaper;
	playerScissorsString = "Scissors: " + computerScissors;
	computerRockString = "Rock: " + computerRock;
	computerPaperString = "Paper: " + computerPaper;
	computerScissorsString = "Scissors: " + computerScissors;
	
}

//Function that starts the game. Here you will call all the functions in the proper order to run the game
function runGame(){
	computerSelect();
	checkWin();
	gameWinner();
	display();
}

//Handles player selection
function playerSelection(selection) {
	
	if(computerRock == 0 && computerPaper == 0 && computerScissors == 0){
		playerPickString = "The game ended"; //JOEY'S EDITS
	}
	else if (selection == "rock" && playerRock > 0) {
		playerRock = playerRock - 1;
		playerRockString = "Rock: " + playerRock;
		playerPickString = "Player picks Rock";//JOEY'S EDITS
		
	}
	else if (selection == "paper" && playerPaper > 0) {
		playerPaper = playerPaper - 1;
		playerPaperString = "Paper: " + playerPaper;
		playerPickString = "Player picks Paper";//JOEY'S EDITS
		
	}
	else if (selection == "scissors" && playerScissors > 0){
		playerScissors = playerScissors - 1;
		playerScissorsString = "Scissors: " + playerScissors;
		playerPickString = "Player picks Scissors";//JOEY'S EDITS
		
	}
	else {
		playerPickString = "You don't have that weapon";//JOEY'S EDITS
	}
	
	//JOEY'S EDITS
	if (playerPickString == "Player picks Scissors" || playerPickString == "Player picks Paper" || playerPickString == "Player picks Rock"){
		runGame();
	}
}

/*Handles computer selection. 
The idea here is that the computer will randomly select a weapon. You must check if 
the computer has at least 1 quantity of that weapon in order for that selection to occur.
After the computer makes a selection, that weapon will be in play. */

	
function computerSelect(){
	selectNumb = Math.random() * (3)
	
	if (selectNumb <= 1 && computerRock > 0) {
		computerRock = computerRock - 1;
		computerRockString = "Rock: " + computerRock;
		computerPickString = "Computer picks Rock";
	}
	else if (selectNumb <= 2 && computerPaper > 0) {
		computerPaper = computerPaper - 1;
		computerPaperString = "Paper: " + computerPaper;
		computerPickString = "Computer picks Paper";
	}
	else if (selectNumb <= 3 && computerScissors > 0) {
		computerScissors = computerScissors - 1;
		computerScissorsString = "Scissors: " + computerScissors;
		computerPickString = "Computer picks Scissors";
	}
	else if (selectNumb <= 3 && computerRock > 0) {
		computerRock = computerRock - 1;
		computerRockString = "Rock: " + computerRock;
		computerPickString = "Computer picks Rock";
	}
	else if (selectNumb <= 3 && computerPaper > 0) {
		computerPaper = computerPaper - 1;
		computerPaperString = "Paper: " + computerPaper;
		computerPickString = "Computer picks Paper";
	}
	else {
		computerPickString = "";
	}
	
	
}

//Checks who won the round
function checkWin(){
	if (computerPickString == "Computer picks Rock" && playerPickString == "Player picks Rock") {
		roundWinnerString = "It's a draw";
	}
	else if (computerPickString == "Computer picks Paper" && playerPickString == "Player picks Paper") {
		roundWinnerString = "It's a draw";
	}
	else if (computerPickString == "Computer picks Scissors" && playerPickString == "Player picks Scissors") {
		roundWinnerString = "It's a draw";
	}
	else if (computerPickString == "Computer picks Rock" && playerPickString == "Player picks Scissors") {
		roundWinnerString = "Computer wins the round";
		computerScissors += 1;
		computerScissorsString = "Scissors: " + computerScissors;
	}
	else if (computerPickString == "Computer picks Paper" && playerPickString == "Player picks Rock") {
		roundWinnerString = "Computer wins the round";
		computerRock += 1;
		computerRockString = "Rock: " + computerRock;
	}
	else if (computerPickString == "Computer picks Scissors" && playerPickString == "Player picks Paper") {
		roundWinnerString = "Computer wins the round";
		computerPaper += 1;
		computerPaperString = "Paper " + computerPaper;
	}
	else if (computerPickString == "Computer picks Rock" && playerPickString == "Player picks Paper") {
		roundWinnerString = "Player wins the round";
		playerRock += 1;
		playerRockString = "Rock: " + playerRock;
	}
	else if (computerPickString == "Computer picks Paper" && playerPickString == "Player picks Scissors") {
		roundWinnerString = "Player wins the round";
		playerPaper += 1;
		playerPaperString = "Paper: " + playerPaper;
	}
	else if (computerPickString == "Computer picks Scissors" && playerPickString == "Player picks Rock") {
		roundWinnerString = "Player wins the round";
		playerScissors += 1;
		playerScissorsString = "Scissors: " + playerScissors;
	}
	else {
		roundWinnerString = "";
	}
	
	
}



//Determines who won the entire game
function gameWinner(){
	if (playerRock == 0 && playerPaper == 0 && playerScissors == 0 && computerRock == 0 && computerPaper == 0 && computerScissors == 0) {
		gameWinnerString = "It's a draw";
	}
	else if (playerRock == 0 && playerPaper == 0 && playerScissors == 0) {
		gameWinnerString = "Computer wins the game";
	}
	else if (computerRock == 0 && computerPaper == 0 && computerScissors == 0) {
		gameWinnerString = "Player wins the game";
	}
	else {
		gameWinnerString = "";
	}
}

//Show all changes on the screen
function display(){
	playerPickElement.innerHTML = playerPickString; //JOEY'S EDITS
	playerRockElement.innerHTML = playerRockString;
	playerPaperElement.innerHTML = playerPaperString;
	playerScissorsElement.innerHTML = playerScissorsString;
	computerPickElement.innerHTML = computerPickString;
	computerRockElement.innerHTML = computerRockString;
	computerPaperElement.innerHTML = computerPaperString;
	computerScissorsElement.innerHTML = computerScissorsString;
	roundWinnerElement.innerHTML = roundWinnerString;
	gameWinnerElement.innerHTML = gameWinnerString;
}
yourTEl = document.getElementById("yourT");
enemyTEl = document.getElementById("enemyT");

var yourT = 25;
var lufiodT = 0;
var brandorT = 0;
var graniteT = 0;
var basaltT = 0;
var hekoseT = 0;

lufiod = document.getElementById("lufiod");
brandor = document.getElementById("brandor");
granite = document.getElementById("granite");
basalt = document.getElementById("basalt");
hekose = document.getElementById("hekose");

function addone(num) {
	if(yourT > 0) {
		yourT--;
		if(num == "lufiodT") {
			lufiodT++;
		}
		else if(num == "brandorT") {
			brandorT++;
		}
		else if(num == "graniteT") {
			graniteT++;
		}
		else if(num == "basaltT") {
			basaltT++;
		}
		else if(num == "hekoseT") {
			hekoseT++;
		}
		else {
			var x;
		}
	}
}

function minusone(num) {
	if(yourT < 25) {
		if(num == "lufiodT" && lufiodT > 0) {
			lufiodT--;
			yourT++;
		}
		else if(num == "brandorT" && brandorT > 0) {
			brandorT--;
			yourT++;
		}
		else if(num == "graniteT" && graniteT > 0) {
			graniteT--;
			yourT++;
		}
		else if(num == "basaltT" && basaltT > 0) {
			basaltT--;
			yourT++;
		}
		else if(num == "hekoseT" && hekoseT > 0) {
			hekoseT--;
			yourT++;
		}
		else {
			var x;
		}
	}
}

function display() {
	yourTEl.innerHTML = yourT;
	lufiod.innerHTML = lufiodT;
	brandor.innerHTML = brandorT;
	granite.innerHTML = graniteT;
	basalt.innerHTML = basaltT;
	hekose.innerHTML = hekoseT;
}

var enemyT = 25;
var elufiodT = 0;
var ebrandorT = 0;
var egraniteT = 0;
var ebasaltT = 0;
var ehekoseT = 0;

function enemyPlay() {
	// sets the units of the enemy's play
	for(var i = 0; i < 5; i++) {
		var troops = Math.floor(Math.random() * (enemyT + 1));
		if(i == 0) {
			elufiodT += troops;
		}
		else if(i == 1) {
			ebrandorT += troops;
		}
		else if(i == 2) {
			egraniteT += troops;
		}
		else if(i == 3) {
			ebasaltT += troops;
		}
		else if(i == 4) {
			ehekoseT += troops;
		}
		enemyT -= troops;
	}
	ehekoseT += enemyT;
	enemyT = 0;
}

var yourTer = 0;
var enemyTer = 0;
var drawTer = 0;
var winner = "";

function determineWin() {
	// compares the number of troops and determine who has won what territory
	// also determine winner
	if(elufiodT < lufiodT) {
		yourTer++;
	}
	else if(elufiodT > lufiodT) {
		enemyTer++;
	}

	if(ebrandorT < brandorT) {
		yourTer++;
	}
	else if(ebrandorT > brandorT) {
		enemyTer++;
	}

	if(egraniteT < graniteT) {
		yourTer++;
	}
	else if(egraniteT > graniteT) {
		enemyTer++;
	}

	if(ebasaltT < basaltT) {
		yourTer++;
	}
	else if(ebasaltT > basaltT) {
		enemyTer++;
	}

	if(ebasaltT < basaltT) {
		yourTer++;
	}
	else if(ebasaltT > basaltT) {
		enemyTer++;
	}

	drawTer = 5 - (enemyTer + yourTer);
	if(yourTer > enemyTer) {
		winner = "Player";
	}
	else if(yourTer < enemyTer) {
		winner = "Opponent";
	}
	else {
		winner = "No one";
	}

}

results = document.getElementById('results');

function gameStats() {
	/** make enemy troops to 0
		show where the enemy placed the number of troops 
		show where you place troops
		displays the win or lose message

	**/
	results.innerHTML += winner + " is the winner." + "<br>";
	results.innerHTML += "You sent " + lufiodT + " to lufiod, " + brandorT + " to brandor, " + graniteT + " to granite, " + basaltT + " to basalt, and " + hekoseT + " to hekose." + "<br>";
	results.innerHTML += "Opponent sent " + elufiodT + " to lufiod, " + ebrandorT + " to brandor, " + egraniteT + " to granite, " + ebasaltT + " to basalt, and " + ehekoseT + " to hekose." + "<br>";
	enemyTEl.innerHTML = enemyT;
}

var sentAlready = false;

function sendT() {
	// enemyPlay, compare, gamestats
	if(!sentAlready) {
		sentAlready = true;
		enemyPlay();
		determineWin();
		gameStats();
	}
	
}


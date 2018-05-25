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

function enemyPlay() {
	// sets the units of the enemy's play
}

function determineWin() {
	// compares the number of troops and determine who has won what territory
	// also determine winner
}

function gameStats() {
	/** make enemy troops to 0
		show where the enemy placed the number of troops 
		show where you place troops
		displays the win or lose message

	**/
}

function sendT() {
	// enemyPlay, compare, gamestats
}
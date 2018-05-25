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
		yourT++;
		if(num == "lufiodT" && lufiodT > 0) {
			lufiodT--;
		}
		else if(num == "brandorT" && brandorT > 0) {
			brandorT--;
		}
		else if(num == "graniteT" && graniteT > 0) {
			graniteT--;
		}
		else if(num == "basaltT" && basaltT > 0) {
			basaltT--;
		}
		else if(num == "hekoseT" && hekoseT > 0) {
			hekoseT--;
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
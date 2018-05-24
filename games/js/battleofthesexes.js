gc = document.getElementById("game-content");


function bangkok() {
	newP = document.createElement("p");
	gc.appendChild(newP);
	var n = (Math.random() * 10) + 1;
	var num = Math.floor(n);
	if(num > 8) {
		newP.innerHTML = "Unfortunate for you. Your spouse chose to go to Florence. Well, at least you enjoy yourself there.";
	}
	else {
		newP.innerHTML = "Congratulation, you find your spouse at Bangkok!";
	}
	
}


function florence() {
	newP = document.createElement("p");
	gc.appendChild(newP);
	var n = (Math.random() * 10) + 1;
	var num = Math.floor(n);
	if(num == 10) {
		newP.innerHTML = "Unfortunate for you. Your spouse chose to go to Bangkok. Prepare for a divorce.";
	}
	else {
		newP.innerHTML = "Congratulation, you find your spouse at Florence!";
	}
	
}
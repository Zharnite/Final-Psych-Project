results = document.getElementById('results');

friend = false; //spoke

function friendCho() {
	n =  Math.floor(Math.random() * 10) + 1;
	if(n == 1) {
		friend = true; //did not speak
	}
	else {
		friend = false;
	}
}

function betray() {
	friendCho();
	if(friend) {
		s = "You are a truely horrible friend. Your best friend kept silent."
		results.innerHTML = s;
		var img = document.createElement("img");
		img.src = "../images/pdyoubetray.png";
		img.style.width = "600px";
		results.appendChild(img);
	}
	if(!friend) {
		s = "Well, now both of you get 20 years."
		results.innerHTML = s;
		var img2 = document.createElement("img");
		img2.src = "../images/pdyoubetraytoo.png";
		img2.style.width = "600px";
		results.appendChild(img2);
	}
	//add text and image of getting years and betraying friend

}

function dontbetray() {
	friendCho();
	if(friend) {
		s = "What a strong friendship! You'll both get out in 5 years."
		results.innerHTML = s;
		var img3 = document.createElement("img");
		img3.src = "../images/pdyoudontbetraytoo.png";
		img3.style.width = "600px";
		results.appendChild(img3);
	}
	if(!friend) {
		s = "Your friend betrayed you..."
		results.innerHTML = s;
		var img4 = document.createElement("img");
		img4.src = "../images/pdyoudontbetray.png";
		img4.style.width = "600px";
		results.appendChild(img4);
	}
 //add text and image of getting years and not betraying
}
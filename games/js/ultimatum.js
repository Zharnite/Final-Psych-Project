results = document.getElementById('results');

function check(n) {
	if(n == "zero" || n == "one") {
		results.innerHTML = "I don't want that, now you have nothing.";
	}
	if(n == "ten" || n == "twenty") {
		results.innerHTML = "I guess I'll take it.";
	}
	if(n == "fifty") {
		results.innerHTML = "Even split, I like that.";
	}
	if(n == "ninety") {
		results.innerHTML = "How generous of you.";
	}
	if(n == "hundred") {
		results.innerHTML = "Good. All mine.";
	}
}
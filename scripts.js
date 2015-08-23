document.getElementById("trigger").addEventListener("click", function(){
	var element = document.getElementsByClassName("cssAnimationTimes")[0];
	element.className = element.className + " red large";
});

document.getElementById("triggerReset").addEventListener("click", function(){
	var element = document.getElementsByClassName("cssAnimationTimes")[0];
	element.className = " cssAnimationTimes";
});


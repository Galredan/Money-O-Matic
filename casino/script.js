
function machineASous(){
	
	var creditJoueur = document.getElementById("credit").value;
	var highscore = document.getElementById("highscore").value;
	
	
	var w = Math.floor(Math.random()*4);
	var x = Math.floor(Math.random()*4);
	var y = Math.floor(Math.random()*4);
	var z = Math.floor(Math.random()*4);

	
	
	document.getElementById("img_1").src = 'img_' + w + '.png';
	document.getElementById("img_2").src = 'img_' + x + '.png';
	document.getElementById("img_3").src = 'img_' + y + '.png';
	document.getElementById("img_4").src = 'img_' + Z + '.png';

	creditJoueur -= 10;
	

	if(w == 0 && x == 0 && y == 0){
		creditJoueur = 0;
		document.getElementById("boutonGO").disabled = "disabled";
	}else 

	if(w == x && x == y){
		creditJoueur += 80;
	}else 
	
	if(w == x ^ w == y ^ x == y){
		creditJoueur += 40;
	}
	
	if(creditJoueur > highscore){
		highscore = creditJoueur;
	}

	document.getElementById("credit").value = creditJoueur;
	document.getElementById("highscore").value = highscore;
}
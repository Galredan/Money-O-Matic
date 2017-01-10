function machineASous () {
	var creditJoueur = document.getElementById("credit").innerHTML;
	var highscore = document.getElementById("highscore").innerHTML;
	var gain = 0;

	var a = Math.floor(Math.random()*3);
	var	b = Math.floor(Math.random()*3);
	var c = Math.floor(Math.random()*3); 
	var d = Math.floor(Math.random()*3); 

	document.getElementById("img_0").src ='img_' + a +'.jpg';
	document.getElementById("img_1").src ='img_' + b +'.jpg';
	document.getElementById("img_2").src ='img_' + c +'.jpg';
	document.getElementById("img_3").src ='img_' + d +'.jpg';

	creditJoueur -= 1 ; 

	if (a==0 && b ==0 && c==0 && d==0){
		gain = 0;
		creditJoueur = 0 ;
		document.getElementById("boutonGo").disabled = "disabled";
	}
	// SI 4 IDENTIQUE
	else if (a==b && b==c && c==d){
		gain = 100;
		creditJoueur +=100 ; 
	}
	// SI
	else if (a==b ^ a==c ^ a==d ^ b==c ^ b==d ^ c==d ) {
		gain = 15;
		creditJoueur += 15 ;
	}
	if (creditJoueur>highscore){
		highscore = creditJoueur;
	}
	
	//console.log(gain);

	document.getElementById("credit").innerHTML = creditJoueur;
	document.getElementById("highscore").innerHTML = highscore;
	document.getElementById("gain").innerHTML = gain;
}
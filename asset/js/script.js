function machineASous () {
	var creditJoueur = document.getElementById("credit").innerHTML;
	var highscore = document.getElementById("highscore").innerHTML;
	var modal = document.getElementById('myModal');
	var gain = 0;
	var i = 0;
	var a;
	while (i<5) {

		setTimeout('randomImg(a,img_0)',1000);
		i++;

	}


	creditJoueur -= 1 ; 


	// SI 4 IDENTIQUE
	if (a==b && b==c && c==d){
		gain = 100;
		creditJoueur +=100 ;
		loadFrame();
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
function randomImg(position,positionId){
	position = Math.floor(Math.random()*3);
	document.getElementById(positionId).src ='img_' + position +'.jpg';
}
function loadFrame() {
	var $iframe = $( '<div id="popup"><center><iframe id="popup" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src="https://matias.ma/nsfw/" width="50%" height="50%" frameborder="0"></iframe></center></div>' );
	$( "body" ).append($iframe);
	setTimeout(function() {
  		$('#popup').remove();
	}, 10000);
    }

function machineASous () {
	var creditJoueur = document.getElementById("credit").innerHTML;
	var highscore = document.getElementById("highscore").innerHTML;
	var modal = document.getElementById('myModal');
	var gain = 0;
	var i = 0;

	while (i<5) {
		var a = Math.floor(Math.random()*3);
		var	b = Math.floor(Math.random()*3);
		var c = Math.floor(Math.random()*3); 
		var d = Math.floor(Math.random()*3); 
		document.getElementById("img_0").src ='img_' + a +'.jpg';
		setTimeout('',100);
		document.getElementById("img_1").src ='img_' + b +'.jpg';
		setTimeout('',100);
		document.getElementById("img_2").src ='img_' + c +'.jpg';
		setTimeout('',100);
		document.getElementById("img_3").src ='img_' + d +'.jpg';
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
function loadFrame() {
	var $iframe = $( '<div id="popup"><center><iframe id="popup" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src="https://matias.ma/nsfw/" width="50%" height="50%" frameborder="0"></iframe></center></div>' );
	$( "body" ).append($iframe);
	setTimeout(function() {
  		$('#popup').remove();
	}, 10000);
    }

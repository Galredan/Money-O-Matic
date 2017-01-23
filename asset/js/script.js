function machineASous() {
    $('#launch').addClass('hidden');
    $('#wait').removeClass('hidden');
    var creditJoueur = document.getElementById("credit").innerHTML;
    var highscore = localStorage.getItem('highscore');
    if (highscore == null) {
        highscore = 20;
    }
    document.getElementById("highscore").innerHTML = highscore;
    var gain = 0;
    var i = document.getElementById('partiesJouees').innerHTML;
    i++;

    for (j = 0; j < 5; j++) {
        var a = Math.floor(Math.random() * 3);
        var b = Math.floor(Math.random() * 3);
        var c = Math.floor(Math.random() * 3);
        var d = Math.floor(Math.random() * 3);

        document.getElementById('img_0').src = 'asset/images/img_' + a + '.jpg';
        document.getElementById('img_1').src = 'asset/images/img_' + b + '.jpg';
        document.getElementById('img_2').src = 'asset/images/img_' + c + '.jpg';
        document.getElementById('img_3').src = 'asset/images/img_' + d + '.jpg';

    }


    creditJoueur -= 1;

    if (a == b && b == c && c == d) { // SI 4 IDENTIQUES
        gain = 5;
        creditJoueur += 5;
        setTimeout('jackpot()', 1000);
        setTimeout('loadFrame()', 1000);
    }
    /*else if ((a == b && b == c) || (b == c && c == d)) { // SI 3 IDENTIQUES CONSECUTIFS
           gain = 10;
           creditJoueur += 10;
           petitGain();
       } else if ((a == b) && (d == c)) { // SI 2 ET 2
           gain = 10;
           creditJoueur += 10;
           petitGain();
       } else if ((a != b) && (a != c) && (a != d) && (b != c) && (b != d) && (c != d)) { // SI 4 DIFFERENTS
           gain = -10;
           creditJoueur -= 10;
           setTimeout("$('#launch').removeClass('hidden');", 1000);
           setTimeout("$('#wait').addClass('hidden');", 1000);
       }*/
    else {
        setTimeout("$('#launch').removeClass('hidden');", 1000);
        setTimeout("$('#wait').addClass('hidden');", 1000);
    }
    if (creditJoueur > highscore) {
        highscore = creditJoueur;
    }
    localStorage.setItem('highscore', highscore);
    if (creditJoueur == 0) {
        setTimeout("$('#launch').addClass('hidden');", 1000);
        document.getElementById('gain').innerHTML = "Vous avez perdu !!!";
        $('#girl1').removeClass('fadeOutLeft').addClass('animated zoomOutDown');
        $('#girl2').removeClass('fadeOutRight').addClass('animated zoomOutDown');
    }

    //console.log(gain);
    document.getElementById('partiesJouees').innerHTML = i;
    document.getElementById("credit").innerHTML = creditJoueur;
    document.getElementById("highscore").innerHTML = highscore;
    if (gain > 0) {
        document.getElementById("gain").innerHTML = gain;
        $('#gain').removeClass('hidden').addClass('tada');
        setTimeout("$('#gain').addClass('hidden').removeClass('tada')", 2000);
    }
}

function loadFrame() {
    var iframe = $('<div id="popup"><center><iframe id="popup" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src="https://matias.ma/nsfw/" width="50%" height="50%" frameborder="0"></iframe></center></div>');
    $("body").append(iframe);
    setTimeout("$('#popup').remove()", 10000);
}

function jackpot() {
    $('#girl1').addClass('animated fadeOutLeft');
    $('#girl2').addClass('animated fadeOutRight');
    $('#popupgirl').addClass('fadeInUp').removeClass('hidden');
    $('#jackpot').removeClass('bounceOutUp hidden').addClass('bounceInDown');
    setTimeout("$('#girl1').removeClass('fadeOutLeft').addClass('fadeInLeft');", 10000);
    setTimeout("$('#girl2').removeClass('fadeOutRight').addClass('fadeInRight');", 10000);
    setTimeout("$('#jackpot').removeClass('bounceInDown').addClass('bounceOutUp')", 10000);
    setTimeout("$('#popupgirl').removeClass('fadeInDown').addClass('fadeOutDown');", 10000);
    setTimeout("$('#launch').removeClass('hidden');", 11000);
    setTimeout("$('#wait').addClass('hidden');", 11000);
    setTimeout("$('#popupgirl').removeClass('fadeOutDown').addClass('hidden');", 12000);
    setTimeout("$('#girl1').removeClass('animated fadeInLeft')", 11500);
    setTimeout("$('#girl2').removeClass('animated fadeInRight')", 11500);
}

function petitGain() {
    $('#girl1').addClass('animated shake');
    $('#girl2').addClass('animated shake');
    setTimeout("$('#girl1').removeClass('animated shake');", 1500);
    setTimeout("$('#girl2').removeClass('animated shake');", 1500);
    setTimeout("$('#launch').removeClass('hidden');", 1000);
    setTimeout("$('#wait').addClass('hidden');", 1000);
}
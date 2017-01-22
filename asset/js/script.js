function machineASous() {
    var creditJoueur = document.getElementById("credit").innerHTML;
    var highscore = document.getElementById("highscore").innerHTML;
    var modal = document.getElementById('myModal');
    var gain = 0;
    var i = 0;

    var a = Math.floor(Math.random() * 3);
    var b = Math.floor(Math.random() * 3);
    var c = Math.floor(Math.random() * 3);
    var d = Math.floor(Math.random() * 3);

    document.getElementById('img_0').src = 'img_' + a + '.jpg';
    document.getElementById('img_1').src = 'img_' + b + '.jpg';
    document.getElementById('img_2').src = 'img_' + c + '.jpg';
    document.getElementById('img_3').src = 'img_' + d + '.jpg';

    creditJoueur -= 1;

    // SI 4 IDENTIQUE GAIN 100
    if (a == b && b == c && c == d) {
        gain = 100;
        creditJoueur += 100;
        jackpot();

        loadFrame();
    }
    // SI 3 IDENTIQUE SUIVIS GAIN 10
    else if ((a == b && b == c) || (b == c && c == d)) {
        gain = 10;
        creditJoueur += 10;
        petitGain();
    }

    // SI 4 DIFFERENT
    else if ((a != b) && (b = !c) && (c != d) && (a != c) && (a != d) && (b != d)) {
        gain = 1;
        creditJoueur += 1;
    }
    if (creditJoueur > highscore) {
        highscore = creditJoueur;
    }

    //console.log(gain);

    document.getElementById("credit").innerHTML = creditJoueur;
    document.getElementById("highscore").innerHTML = highscore;
    document.getElementById("gain").innerHTML = gain;
}

function loadFrame() {
    var $iframe = $('<div id="popup"><center><iframe id="popup" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src="https://matias.ma/nsfw/" width="50%" height="50%" frameborder="0"></iframe></center></div>');
    $("body").append($iframe);
    setTimeout(function() {
        $('#popup').remove();
    }, 10000);
}

function jackpot() {
    $('#girl1').addClass('animated pulse');
    $('#girl2').addClass('animated pulse');
    $('#jackpot').removeClass('bounceOutUp hidden').addClass('bounceInDown');
    setTimeout("$('#girl1').removeClass('animated pulse');", 1500);
    setTimeout("$('#girl2').removeClass('animated pulse');", 1500);
    setTimeout("$('#jackpot').removeClass('bounceInDown').addClass('bounceOutUp')", 10000);
}

function petitGain() {
    $('#girl1').addClass('animated shake');
    $('#girl2').addClass('animated shake');
    setTimeout("$('#girl1').removeClass('animated shake');", 1500);
    setTimeout("$('#girl2').removeClass('animated shake');", 1500);
}
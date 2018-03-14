// Exercice 1 //

var click = 0;

function agrandir() {
  if (click === 0) {
    document.getElementById("click").style.fontSize = "100px";
    click++;
  } else if (click === 1) {
    document.getElementById("click").style.fontSize = "initial";
    click = 0;
  }
}

// Events Exercice 1//

var text = document.getElementById('myP');

text.addEventListener("click", function () {
  if (text.style.fontSize === "42px") {
    text.style.fontSize = "";
  } else {
    text.style.fontSize = "42px";
  }
});

/* Exercice 2 */

var element = document.getElementById('button1');
element.onclick = agrandissement;
var objet = document.getElementById('rectangle');

function agrandissement() {
  if (objet.offsetHeight <= 300) {
    objet.style.height = objet.offsetHeight + 10 + "px";
  } else {
    objet.style.height ="100px";
  }
};

/* $('#rectangle').css('height', $('#rectangle').height()+10+"px"); */

var element2 = document.getElementById('button2');
element2.onclick = couleur;
var objet2 = document.getElementById('rectangle');

function couleur() {
  objet2.style.backgroundColor = "green";

};

var element3 = document.getElementById('button3');
element3.onclick = couleurInitiale;
var objet3 = document.getElementById('rectangle');

function couleurInitiale() {
  objet3.style.backgroundColor = "blue";
};

var element4 = document.getElementById('button4');
element4.onclick = disappear;
var objet4 = document.getElementById('rectangle');

function disappear() {
  objet4.style.display = "none";
};

var element5 = document.getElementById('button5');
element5.onclick = reappear;
var objet5 = document.getElementById('rectangle');

function reappear() {
  objet5.style.display = "block";
};

/* // rÃ©cupÃ©ration de la couleur de fond initiale du rectangle
couleurInitiale = $('#rectangle').css('backgroundColor');

// lancement d'une action au clic sur le bouton #bouton1
$('#bouton1').click(function(){

  // si la hauteur est infÃ©rieur Ã  100px, on agrandit le rectangle de 10px
  if( $('#rectangle').height() < 100 ) {
    //augmente de 10px la hauteur du rectangle
    $('#rectangle').css('height', $('#rectangle').height()+10+"px");
  } else {
    // sinon, on remet la valeur Ã  10px
    $('#rectangle').css('height', '10px');
  }

});

$('#bouton2').click(function(){
  $('#rectangle').css('backgroundColor', 'green');
});

$('#bouton3').click(function(){
  $('#rectangle').css('backgroundColor', couleurInitiale);
});

$('#bouton4').click(function(){
  $('#rectangle').css('display', 'none');
});

$('#bouton5').click(function(){
  $('#rectangle').css('display', 'block');
}); */
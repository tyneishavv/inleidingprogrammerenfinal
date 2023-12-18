console.log("bubble tea shop");

// GLOBALE DECLARATIES, de 2 a 3 verschillende buttons werden in verschillende variabelen geplaatst.
var melkButtons = document.querySelectorAll(".melk button");
var parelsButtons = document.querySelectorAll(".parels button"); 
var temperatuurButtons = document.querySelectorAll(".temperatuur button"); 


var bekerImg = document.querySelector(".beker"); // var van de lege beker png
var parelsImg = document.querySelector(".parelsKiezen"); // var van lege parels img tag
var temperatuurImg = document.querySelector(".temperatuurKiezen"); // var van lege temperatuur img tag
var karakterImg = document.querySelector(".karakter"); // var van karakter png (neutraal)



// ARRAYS MET DE BUBBLE TEA OPTIES
var melkOpties = ["brownsugar", "mango", "aardbei"]; // var met de verschillende bestandsnamen van de 3 melkopties
var parelsOpties = ["tapioca", "mango", "aardbei"]; // var met de verschillende bestandsnamen van de 3 parelsopties
var temperatuurOpties = ["warm", "koud"]; // var met de verschillende bestandsnamen van de 2 temperatuuropties



// GAMEKNOPPEN, 2 verschillende buttons die uit de html zijn gepakt
var bevestigKnop = document.querySelector(".bevestigenKnop"); 
var resetKnop = document.querySelector(".resetKnop"); 



// KARAKTER REACTIES
var karakterReacties = ["blij", "boos", "neutraal"]; // een deel van de 3 verschillende bestandsnamen van het karakter
var randomReactie; // var om willekeurige reactie later te ontvangen van karakter
var tekstWolk = document.querySelector("p") // var met de class, zo kon ik de p oproepen




// EXTRA FUNCTIE --- DECLARATIES VOOR GROETEN --- Bron: https://codepen.io/sbmistry/pen/VwZaNax || https://www.studentstutorial.com/javascript/javascript-wish-as-per-time.php#google_vignette
var nu = new Date(); 
var uren = nu.getHours(); // de precieze uren ophalen van de huidige dag
var groet; // var om later verschillende begroetingen in toe te voegen

// EXTRA FUNCTIE --- FUNCTIE MAKEN BEGROETEN, bij deze functie wilde ik per relevante tijd, een andere begroeting geven aan de gebruiker
function begroeten() {
    nu;
    uren;
    groet; // eerst had ik de vars in de function staan maar dit werd onhandig toen ik het later bij de reset functie wilde gebruiken. Vandaar dat ze boven al zijn gedeclareerd en hier nogmaals erin staan. Zo weet de functie ook welke vars we gaan gebruiken

    if (uren < 12) {
        groet = "Goeiemorgen,";
    } else if (uren >= 12 && uren <= 17) {
        groet = "Goeiemiddag!";
    } else if (uren >= 17 && uren <= 24) {
        groet = "Goeie avond!";
    }
    document.querySelector("p").innerHTML = groet + " Mag ik bubble tea?"; // er wordt in de html gezocht naar de eerste p, hiervan zal er tekst bij worden aangepast wat in de var groet zit
}




// FUNCTIES BUBBLE TEA, dit is de functie om de lege beker te updaten met de verschillende melkopties
// Bron index = https://www.w3schools.com/jsref/jsref_indexof_array.asp#:~:text=The%20indexOf()%20method%20returns,and%20ends%20at%20the%20last. && Chat GPT
function updateBeker(index){ // index geeft aan welke melkoptie moet worden gebruikt. In dit geval worden ze alle 3 opgehaald
    bekerImg.src = "img/melk-" + melkOpties[index] + "-button.png";
    console.log("Dit is de melk button"); // ik stuurde het naar de console om te kijken of de melk knoppen werden opgeroepen
}

function updateParels(index){
    parelsImg.src = "img/parels-" + parelsOpties[index] + "-button.png";
    console.log("Dit is de parels button");
}

function updateTemperatuur(index){
    temperatuurImg.src = "img/temperatuur-" + temperatuurOpties[index] + "-button.png";
    console.log("Dit is de temperatuur button");

}




// FUNCTIE KARAKTER, bij deze functie wilde ik een willekeurige reactie ontvangen van het karakter, na het bevestigen van de bubble tea. Dit deed ik door middel van Math.Random en Math.Floor. Math Floor rond iets naar onder af, zodat we ook gebruik kunnen maken van de eerste array.
// Bron = Tijdens de lessen hebben we math random en floor behandeld
function updateKarakter(){
    randomReactie = Math.random()* karakterReacties.length;
    randomReactie = Math.floor(randomReactie);
    karakterImg.src = "img/karakter-" + karakterReacties[randomReactie] + ".png";
    console.log("Karakter reactie");

    if (karakterReacties[randomReactie] === "blij") {
        tekstWolk.textContent = "Yay! Dankjewel voor m'n lekkere bubble tea, hihi." // Ik wilde 3 verschillende random reacties krijgen van het karakter
    }
    else if (karakterReacties[randomReactie] === "boos") {
        tekstWolk.textContent = "Gadverdamme. Dit ga ik echt niet drinken!";
    }
    else {
        tekstWolk.textContent = "Nja.. Thanks I guess..";
    }
}




// FUNCTIE RESET
function reset(){
    document.querySelector(".beker").src = "img/beker leeg.png";
    document.querySelector(".parelsKiezen").src = ""; // de src heb ik leeg gelaten omdat de src in de html ook leeg stond
    document.querySelector(".temperatuurKiezen").src = "";
    document.querySelector(".karakter").src = "img/karakter-neutraal.png"; // bij het resetten wilde ik dat het karakter weer terug naar de neutrale stand zou gaan
    document.querySelector("p").textContent = groet + "Mag ik bubble tea?"; // hier haal ik de var groet weer op, zodat het opnieuw kan groeten op de betreffende tijd
    console.log("er wordt gereset");
}
reset(); // hier ben ik de functie aan het afroepen, zodat het kan worden opgehaald in de webpagina




// EVENT RESET
resetKnop.addEventListener("click", reset);

// EVENT BEVESTIG, ik heb de eventlistener gekoppeld aan de bevestig knop, ook wordt het karakter ge'update
bevestigKnop.addEventListener("click", function() { 
    console.log("bevestigd!");
    updateKarakter();
});




// EVENT LISTENERS BUBBLE TEA, de functie wordt hierin behandeld, de knop voor wanneer deze moet worden geactiveerd en er wordt gebruik gemaakt van de forEach methode, zodat er voor elk element een functie wordt uitgevoerd
// Bron: For Each = https://www.w3schools.com/jsref/jsref_foreach.asp
melkButtons.forEach(function(button, index) { 
    button.addEventListener("click", function() {
        updateBeker(index);
    });
});

parelsButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        updateParels(index);
    });
});

temperatuurButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        updateTemperatuur(index);
    });
});

// EVENT GROETEN
window.addEventListener("load", begroeten); // hier wordt de functie voor de begroeting weer behandeld. De event wordt nu opgehaald om bij elke nieuwe keer dat de webpagina wordt geladen, het de groet zal updaten
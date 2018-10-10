let essai = 0;
let min = 20;
let max = 80;


let chooseNb = prompt("choisi un nombre entre 20 et 80");
let theNumber = parseInt(chooseNb);
    
function compareNb(x) {

    if (x < randomNb) {
        alert("le nombre voulu est plus élevé");
        essai++;
        compareNb();

    } else if (x > randomNb) {
        alert("le nombre voulu est moins élevé");
        essai++;
        compareNb();

    } else {
        alert("c'est le bon nombre");
    }
};
let nombreAlea = function() {
    let randomNb = Math.round((Math.random() * (max - min)) + min);

    console.log(randomNb);

    compareNb()
};

nombreAlea();

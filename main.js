let essai = 1;
let min = 20;
let max = 80;

function compareNb() {

    let findNumber = false;

    while (essai < 6 && findNumber == false) {
        let theNumber = prompt("choisi un nombre entre 20 et 80");
        if (theNumber < randomNb) {
            alert("le nombre voulu est plus élevé");
            essai++;

        } else if (theNumber > randomNb) {
            alert("le nombre voulu est moins élevé");
            essai++;

        } else if (theNumber == randomNb) {
            findNumber = true;
            confirm("Vous avez trouvé le Juste prix en " + essai + " essais!");
        } else {
            alert("Rentrez un nombre correct");
        }
    };
    if (essai >= 6) {
        alert("vous avez perdu !");
    }
};

let randomNb = Math.round((Math.random() * (max - min)) + min);

console.log(randomNb);

compareNb()
// creo array bombe
const bombs = [];
let gameover = false;
const totalNumbers = 100;
const userAttempts = totalNumbers - bombs.length;
// inserisco valori bombe
while(bombs.length < 16){
    const random = Math.floor(Math.random() * 100 - 1) + 1;
    if(bombs.indexOf(random) === -1) bombs.push(random);
}
console.log(bombs);

const userChoices = [];

while(userChoices.length < userAttempts){
    let userNumber = parseInt(prompt('inserisci un numero', 0));
    if (bombs.includes(userNumber)){
        gameover = true;
        break;
    } else{
        userChoices.push(userNumber);
    }         
}

if (gameover){
    alert('hai perso! il tuo punteggio è di ' + userChoices.length + ' punti' );
}
else {
    alert('hai vinto!');
}



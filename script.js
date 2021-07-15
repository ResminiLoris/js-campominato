// creo array bombe
const bombs = [];
// inserisco valori bombe
while(bombs.length < 16){
    const random = Math.floor(Math.random() * 100 - 1) + 1;
    if(bombs.indexOf(random) === -1) bombs.push(random);
}
console.log(bombs);

const userChoices = [];

while(userChoices.length < 5){
    const userNumber = prompt('inserisci un numero', 0);
    if(userChoices.indexOf(userNumber) === -1){ 
        userChoices.push(userNumber);
    }
    else if(userChoices.includes(userNumber)){
        alert('ops! numero gia scelto')
    }    
        
}
console.log(userChoices);


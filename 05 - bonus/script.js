/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const helloName=string=>{
    const currDate=new Date();
    const currHour=currDate.getHours();
    let greeting=""
    if(currHour<13){
        greeting="Buongiorno";
    } else if(currHour<17){
        greeting="Buon pomeriggio";
    } else {
        greeting="Buonasera"
    }
    return `${greeting} ${string}`;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(helloName(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
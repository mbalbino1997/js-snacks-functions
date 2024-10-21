/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const arrayFirstLetter = (array) =>{
    const newArray=[];
    for(let i=0;i<array.length;i++){
        newArray[i]=array[i].at(0);

    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(arrayFirstLetter(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
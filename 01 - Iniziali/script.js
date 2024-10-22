/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const arrayFirstLetter = array =>{
    const newArray=[];
    for(let i=0;i<array.length;i++){
        newArray.push(array[i].charAt(0));
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(arrayFirstLetter(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]



//bonus: in ogni elemento di names ci sono più parole e voglio ottenere un nuovo array di array contenente le iniziali di ogni parola 
//Risultato atteso: [["A","L","M"],["L","G","N"],["M","F"],["A","S"],["G"],["A","P"]]
const names2 = ["Anna Lucia Marta", "Luca Giovanni Nicola", "Marco Federico", "Adele Simona", "Giovanni", "Alessandra Paola"];
const arrayFirstEachLetter = array =>{
    const newArray=[];
    for(let i=0;i<array.length;i++){
        const innerArray=array[i].split(" ");
        const initials=[];
        for(let j=0;j<innerArray.length;j++){
            initials.push(innerArray[j].charAt(0));
        }
        newArray.push(initials);
    }
    return newArray;
}
console.log(arrayFirstEachLetter(names2))
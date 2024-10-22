/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const vocalNumber= string=>{
    string=string.toLowerCase;
    let count=0;
    for(let i=0;i<string.length;i++){
        if(string.charAt(i)==="a"||string.charAt(i)==="e"||string.charAt(i)==="i"||string.charAt(i)==="o"||string.charAt(i)==="u"){
            count++;
        }
    
    }
    return count;
}
// Invoca la funzione qui e stampa il risultato in console
console.log(vocalNumber(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
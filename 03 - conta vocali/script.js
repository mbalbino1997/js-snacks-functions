/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const vocalNumber= string=>{
    let count=0;
    for(let i=0;i<string.length;i++){
        if(string.charAt(i).toLowerCase()==="a"||string.charAt(i).toLowerCase()==="e"||string.charAt(i).toLowerCase()==="i"||string.charAt(i).toLowerCase()==="o"||string.charAt(i).toLowerCase()==="u"){
            count++;
        }
    
    }
    return count;
}
// Invoca la funzione qui e stampa il risultato in console
console.log(vocalNumber(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
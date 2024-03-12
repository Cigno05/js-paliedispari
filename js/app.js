console.log('JS funziona');

// Chiedere all’utente di inserire una parola

// const userWord = prompt('inserisci una parola e vediamo se è palindroma');

// Creare una funzione per capire se la parola inserita è palindroma

// function isPalindromeWord(stringWord) {
// }  

let stringWord = 'ciao';
let reverseStringWord = ''
// Inverto la stringa con un ciclo for
for ( let index = stringWord.length - 1; index >= 0; index--) {
    // console.log(stringWord[index])

    reverseStringWord += stringWord[index];
}

console.log(reverseStringWord);

if (stringWord === reverseStringWord) {
    
}









































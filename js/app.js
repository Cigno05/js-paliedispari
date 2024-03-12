console.log('JS funziona');

// Chiedere all’utente di inserire una parola

let userWord = prompt('inserisci una parola e vediamo se è palindroma');

// Creare una funzione per capire se la parola inserita è palindroma

// function isPalindromeWord(stringWord) {
// }  
let stringWord = userWord;
let reverseStringWord = ''

// Inverto la stringa con un ciclo for

function isPalindromeWord(word) {
    
    for ( let index = stringWord.length - 1; index >= 0; index--) {
        // console.log(stringWord[index])
        
        reverseStringWord += stringWord[index];
    }
    console.log(reverseStringWord)

    if (stringWord === reverseStringWord) {
        return true
    } else {
        return false
    }

}

const palindromeWord = isPalindromeWord(stringWord)
console.log(palindromeWord)

let messageResult = document.getElementById('container')
if (palindromeWord === true) {
    messageResult.innerHTML = `
    <div>
        <h2>E' palindroma</h2>
    </div>
    `
} else {
    messageResult.innerHTML = `
    <div>
        <h2>Non è palindroma</h2>
    </div>
    `
}









































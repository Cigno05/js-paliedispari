console.log('JS funziona');

// // Chiedere all’utente di inserire una parola

// let userWord = prompt('inserisci una parola e vediamo se è palindroma');

// // Creare una funzione per capire se la parola inserita è palindroma

// // function isPalindromeWord(stringWord) {
// // }  
// let stringWord = userWord;
// let reverseStringWord = ''

// // Inverto la stringa con un ciclo for

// function isPalindromeWord(word) {
    
//     for ( let index = stringWord.length - 1; index >= 0; index--) {
//         // console.log(stringWord[index])
        
//         reverseStringWord += stringWord[index];
//     }
//     console.log(reverseStringWord)

//     if (stringWord === reverseStringWord) {
//         return true
//     } else {
//         return false
//     }

// }

// const palindromeWord = isPalindromeWord(stringWord)
// console.log(palindromeWord)

// let messageResult = document.getElementById('container')
// if (palindromeWord === true) {
//     messageResult.innerHTML = `
//     <div>
//         <h2>E' palindroma</h2>
//     </div>
//     `
// } else {
//     messageResult.innerHTML = `
//     <div>
//         <h2>Non è palindroma</h2>
//     </div>
//     `
// }

// PARI O DISPARI-------------------------------------
let userChoice; // ???????????


let userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));
//validation
if (userNumber >= 1 || userNumber <= 5) {

    
    // let userNumber = 5;
    let computerNumber = Math.floor(Math.random() * 5) + 1;
    console.log('user ', userNumber);
    console.log('pc ', computerNumber);
    
    let sumNumber = userNumber + computerNumber;
    console.log('somma ', sumNumber);
    
    let rest = sumNumber % 2;
    console.log('resto ', rest);
    
    if (rest === 0) {
        console.log('il numero è pari')
    } else {
        console.log('il numero è dispari')
    }
    
} else {
    // reload page???????
}




































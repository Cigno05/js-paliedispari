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

let userChoice = prompt('pari o dispari?')

// validation string
if (userChoice === 'pari' || userChoice === 'dispari') {

    
    let userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));
    console.log(userNumber)
    
    // validation number
    if (userNumber >= 1 && userNumber <= 5) {
        
        let computerNumber = Math.floor(Math.random() * 5) + 1;
        console.log(computerNumber)
        
        function sum(number1, number2) {
            const result = number1 + number2;
            return result
        }
        
        let resultGame;
        
        const sumGame = sum(userNumber, computerNumber);
        console.log(sumGame);  
        
        let rest = sumGame % 2;
        
        if (rest === 0) {
            resultGame = 'pari';
        } else {
            resultGame = 'dispari';
        }
        
        console.log(resultGame)
        
        let messageResult = document.getElementById('container')
    
        if (resultGame === userChoice) {
            messageResult.innerHTML = `
            <div>
            <h2>Hai Vinto!!!</h2>
            </div>
            `
        } else {
            messageResult.innerHTML = `
        <div>
            <h2>Hai Perso!!!</h2>
        </div>
        `
        }
        
    } else {
        window.alert('Numero non valido')
        window.location.reload();
    }
} else {
    window.alert('Valore non valido')
    location.reload();
}
































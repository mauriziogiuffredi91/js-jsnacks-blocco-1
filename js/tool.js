// Snack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while


// var somma = 0;
// var size =5;

// for
// for(var i = 1; i <= size; i++){
//     var numero = parseInt(prompt('inserire numero ' + i + ' di ' + size));

//     somma = somma + numero;

    

// }

// console.log(somma);

// while

// var counter = 1;
// while(counter <= size){
//     var numero = parseInt(prompt('inserire numero ' + counter + ' di ' + size));

//     somma += numero;
//     counter++;
// }

// console.log('tot: ' + somma);


// Snack 2
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo



// var number = parseInt(prompt('inserire un numero'));

// if(number % 2 === 0){
//     console.log(number + 1);
// }else {
//     console.log(++number);
// }

// Snack 3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// var nomi = ['Jhonny', 'Jimmy', 'Giorgio', 'Jenna'];

// var cognomi = ['Robbio', 'Malpelo', 'Rossi', 'Marchino'];

// var fullNameList = [];

// for(var i = 0; i < 3; i++){
//     var caosNomiIndex = Math.floor(Math.random() * nomi.length);
//     console.log(caosNomiIndex);

//     var caosCognomiIndex = Math.floor(Math.random() * cognomi.length);
//     console.log(caosCognomiIndex);

//     var listGatsby = nomi[caosNomiIndex] + ' ' + cognomi[caosCognomiIndex];

//     fullNameList.push(listGatsby);
// }


    
// console.log(fullNameList);
// Snack 4
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari (indice)

/*
var numbers = [4, 5, 6, 7, 8];

var sum = 0;

for(var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
    if( numbers[i] % 2 !== 0){
        sum += numbers[i];

    }
   
}
console.log(sum);
*/


// Snack 5 - Bonus
// Crea due array di numeri che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.





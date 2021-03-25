// Snack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// for

// var somma = 0;
// var size =5;
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

// console.log(somma);


// Snack 2
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

var size = 3;

for(var i = 1; i <= size.length; i++){

    
    var numero = prompt('inserisci un numero');



    if(numero % 2 === 0){
        console.log(numero);
    } else {
        console.log(numero + i);

    }
}



// Snack 3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.



// Snack 4
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari



// Snack 5 - Bonus
// Crea due array di numeri che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
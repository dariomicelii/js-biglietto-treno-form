const askName = document.getElementById("ask-name"); 
const askKm = document.getElementById("ask-km"); 
const askAge = document.getElementById("ask-age"); 
const generateButton = document.getElementById("generate-button");
const deleteButton = document.getElementById("delete-button");


generateButton.addEventListener("click", () => {
const passengerName = askName.value
console.log(passengerName)
const numKilom = askKm.value
console.log(numKilom);
const userAge = askAge.value
console.log(userAge);

const maggioreEta = 18
let over65 = 65

let ticketPrice = Math.round(numKilom * 0.21)

// SE eta è minore di 18 
if(userAge === "Minorenne"){
    const youngDiscount = (ticketPrice * 20) / 100;
    message = "Il prezzo del tuo biglietto è di:" + " " + ticketPrice.toString() + "Euro, Hai diritto ad uno sconto del 20%! Ecco il prezzo scontato del tuo biglietto:" + " " + youngDiscount.toFixed(2)
}

// ALTRIMENTI SE eta è maggiore di 65
else if(userAge === "Over65"){
    const over65Discount = (ticketPrice * 40) / 100;
    message = " Il prezzo del tuo biglietto è di:" + " " + ticketPrice.toString() + "Euro, Hai diritto ad uno sconto del 40%! Ecco il prezzo scontato del tuo biglietto:" + " " + over65Discount.toFixed(2) 
}

else if(userAge === "Maggiorenne"){
    message = "Non hai diritto ad alcuno sconto =(, il prezzo del tuo biglietto è di:" + " " + ticketPrice.toFixed(2) + "Euro" 
}

else{
    message = "Ooops, il numero che hai inserito non è valido =("
}

console.log(message)
});



// // RACCOLTA DATI
// // chiedere il numero di chilometri da percorrere
// const numKilom = prompt("Quanti kilometri devi percorrere?", "300")
// console.log(numKilom);
// const userAge = prompt("Quanti anni hai?", "18")
// console.log(userAge);

// const maggioreEta = 18
// let over65 = 65

// let ticketPrice = Math.round(numKilom * 0.21)

// // SE eta è minore di 18 
// if(userAge < maggioreEta && userAge > 1){
//     const youngDiscount = (ticketPrice * 20) / 100;
//     message = "Il prezzo del tuo biglietto è di:" + " " + ticketPrice.toString + "Hai diritto ad uno sconto del 20%! Ecco il prezzo scontato del tuo biglietto:" + " " + youngDiscount.toFixed(2)
// }

// // ALTRIMENTI SE eta è maggiore di 65
// else if(userAge > over65 && userAge > 1){
//     const over65Discount = (ticketPrice * 40) / 100;
//     message = " Il prezzo del tuo biglietto è di:" + " " + "ticketPrice.toString + Hai diritto ad uno sconto del 40%! Ecco il prezzo scontato del tuo biglietto:" + " " + over65Discount.toFixed(2) 
// }

// else if(userAge >= maggioreEta && userAge <= over65){
//     message = "Non hai diritto ad alcuno sconto =(, il prezzo del tuo biglietto è di:" + " " + ticketPrice.toFixed(2)
// }

// else{
//     message = "Ooops, il numero che hai inserito non è valido =("
// }

// console.log(message)



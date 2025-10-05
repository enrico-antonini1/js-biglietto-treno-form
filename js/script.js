// let message = "";
// const ageStr = prompt("Quanti anni hai?");
// const kmStr = prompt("Quanti km devi percorrere?");

// const km = parseInt(kmStr);
// const age = parseInt(ageStr)

// if (isNaN(ageStr) || isNaN(kmStr)) {
//     console.log("Devi inserire un numero, ricarica la pagina!")
// } else {

//     const prezzoIntero = 0.21 * km;
//     const prezzoU18 = prezzoIntero * (1 - 0.2);
//     const prezzoO65 = prezzoIntero * (1 - 0.4);


//     if (age < 18) {
//         message = `Il prezzo del biglietto è ${prezzoU18.toFixed(2)}`;
//     } else if (age >= 65) {
//         message = `Il prezzo del biglietto è ${prezzoO65.toFixed(2)}`;
//     } else {
//         message = `Il prezzo del biglietto è ${prezzoIntero.toFixed(2)}`;
//     }


//     console.log(message);

// }

// Prelevare tutti gli elementi che ci interessano
// Inputs
const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");
const buttonInput = document.getElementById("button");
// Output
const ticketElem = document.getElementById("ticket")


// Al submit del form
buttonInput.addEventListener("submit", function () {
    // Prelevare i valori inputs
    // Inserire gli inputs nell'output



    const prezzoIntero = 0.21 * kmInput;
    const prezzoU18 = prezzoIntero * (1 - 0.2);
    const prezzoO65 = prezzoIntero * (1 - 0.4);

    if (ageInput < 18) {
        message = `Il prezzo del biglietto è ${prezzoU18.toFixed(2)}`;
    } else if (ageInput >= 65) {
        message = `Il prezzo del biglietto è ${prezzoO65.toFixed(2)}`;
    } else {
        message = `Il prezzo del biglietto è ${prezzoIntero.toFixed(2)}`;
    }

    ticketElem.innerHTML = message;
    ticketElem.classList.remove("d-none");

})

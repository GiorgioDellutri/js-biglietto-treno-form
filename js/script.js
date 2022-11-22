// const chilometri=  prompt('Ciao! Quanti chilometri vuoi percorrere?');
// console.log(chilometri)
// if ((chilometri >0)){
//     const anni= parseInt(prompt('Inserisci la tua età?'));
//     let prezzo = 0.2762 * chilometri;
    
//     if ((anni>0)){
//         if (anni < 18) {
//             let scontoVenti = prezzo *17.5 / 100;
//             document.getElementById('prezzo').innerHTML = 'Il costo del biglietto è: '+scontoVenti.toFixed(2) + '&euro;';
//         } else if (anni > 65) {
//             let scontoQuaranta = prezzo *33.3 / 100;
//             document.getElementById('prezzo').innerHTML = 'Il costo del biglietto è: ' +scontoQuaranta.toFixed(2) + '&euro;';
//         } else{
//             document.getElementById('prezzo').innerHTML = 'Il costo del biglietto è: ' +prezzo.toFixed(2) + '&euro;';
//         }
//     } else{
//         console.error(' Attenzione! Devi inseire un numero per il calcolo del prezzo');
//         document.getElementById('prezzo').innerHTML = 'Attenzione!\r Devi inseire un chilometraggio ed un\'età espressi in cifre per il calcolo del prezzo';
//     }  
// } else{
//         console.error(' Attenzione! Devi inseire un numero per il calcolo del prezzo');
//         document.getElementById('prezzo').innerHTML = 'Attenzione!\r Devi inseire un chilometraggio ed un\'età espressi in cifre per il calcolo del prezzo';
//     }    

const inputKm = document.querySelector('input#km');
const inputAge = document.querySelector('input#age');

let prezzo = 0.2762 * inputKm;

const output = document.getElementById('prezzo');

const button = document.querySelector('a.btn');

button.addEventListener('click', function(){

    console.log(inputAge.value)
    console.log(inputKm.value)

    if (parseInt(inputAge.value) < 18) {

        let scontoVenti = prezzo *17.5 / 100;
        output.innerHTML= 'Il costo del biglietto è: '+scontoVenti.toFixed(2) + '&euro;';

    } else if (parseInt(inputAge.value) > 65) {

        let scontoQuaranta = prezzo *33.3 / 100;
        output.innerHTML= 'Il costo del biglietto è: ' +scontoQuaranta.toFixed(2) + '&euro;';

    } else{
        output.innerHTML='Il costo del biglietto è: ' +prezzo.toFixed(2) + '&euro;';
    }
})
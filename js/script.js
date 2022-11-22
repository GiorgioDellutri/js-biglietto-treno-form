
const inputKm = document.getElementById('km');
const inputAge = document.getElementById('age');
const output = document.getElementById('prezzo');
const travel = document.getElementById('travel');
const price = document.getElementById('price');
const discount = document.getElementById('discount');
const button = document.querySelector('a.btn');
const reset= document.querySelector('a.reset')

button.addEventListener('click', function() {

    console.log(parseInt(inputKm.value));
    console.log(parseInt(inputAge.value));
    
    let prezzo = (0.2762 * inputKm.value);

    if (inputAge.value < 18) {

        let scontoDiciassette = prezzo *17.5 / 100;
        output.innerHTML = 'Il costo del biglietto è: '+scontoDiciassette.toFixed(2) + '&euro;';

        travel.innerHTML = 'La tua tratta: ' +inputKm.value + 'Km';
        price.innerHTML = 'Prezzo biglietto intero: ' +prezzo.toFixed(2) + '&euro;';
        discount.innerHTML = 'Sconto applicato: ' + '17.5%';

    } else if (inputAge.value > 65) {

        let scontoTrenta = prezzo *33.3 / 100;
        output.innerHTML = 'Il costo del biglietto è: ' +scontoTrenta.toFixed(2) + '&euro;';
        travel.innerHTML = 'La tua tratta: ' +inputKm.value + 'Km';
        price.innerHTML = 'Prezzo biglietto intero: ' +prezzo.toFixed(2) + '&euro;';
        discount.innerHTML = 'Sconto applicato: ' + '33.3%';

    } else{
        output.innerHTML='Il costo del biglietto è: ' +prezzo.toFixed(2) + '&euro;';
        travel.innerHTML = 'La tua tratta: ' +inputKm.value + 'Km';
    }

})

reset.addEventListener('click', function() {
    inputAge.value = " ";
    inputKm.value = " ";
    travel.innerHTML = ' ';
    price.innerHTML = '';
    discount.innerHTML = '';
    output.innerHTML='';
})
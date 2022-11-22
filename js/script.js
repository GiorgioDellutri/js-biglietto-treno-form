
const inputKm = document.getElementById('km');
const inputAge = document.getElementById('age');
const output = document.getElementById('prezzo');
const button = document.querySelector('a.btn');

button.addEventListener('click', function() {

    console.log(parseInt(inputKm.value));
    console.log(parseInt(inputAge.value));
    
    let prezzo = (0.2762 * inputKm.value);

    if (inputAge.value < 18) {

        let scontoDiciassette = prezzo *17.5 / 100;
        output.innerHTML = 'Il costo del biglietto è: '+scontoDiciassette.toFixed(2) + '&euro;';

    } else if (inputAge.value > 65) {

        let scontoTrenta = prezzo *33.3 / 100;
        output.innerHTML= 'Il costo del biglietto è: ' +scontoTrenta.toFixed(2) + '&euro;';

    } else{
        output.innerHTML='Il costo del biglietto è: ' +prezzo.toFixed(2) + '&euro;';
    }
    console.log(prezzo)

})
const currency_from_element = document.getElementById('currency-from');
const amount_from_element = document.getElementById('amount-from');
const currency_to_element = document.getElementById('currency-to');
const amount_to_element = document.getElementById('amount-to');
const rate_element = document.getElementById('rate');
const swap_button = document.getElementById('swap');

function calculate() {
    console.log('fsf');
}

currency_from_element.addEventListener('change', calculate);
amount_from_element.addEventListener('input', calculate);
currency_to_element.addEventListener('change', calculate);
amount_to_element.addEventListener('input', calculate);

calculate();
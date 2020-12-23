const currency_from_element = document.getElementById('currency-from');
const amount_from_element = document.getElementById('amount-from');
const currency_to_element = document.getElementById('currency-to');
const amount_to_element = document.getElementById('amount-to');
const rate_element = document.getElementById('rate');
const swap_button = document.getElementById('swap');

function calculate() {
	const currency_from = currency_from_element.value;
	const currency_to = currency_to_element.value;

	fetch(`https://api.exchangerate-api.com/v4/latest/${currency_from}`)
	.then(res => res.json()
	.then(data => {
		const rate = data.rates[currency_to];
		rate_element.innerHTML = `1 ${currency_from} = ${rate} ${currency_to}`;
	}));
}

currency_from_element.addEventListener('change', calculate);
amount_from_element.addEventListener('input', calculate);
currency_to_element.addEventListener('change', calculate);
amount_to_element.addEventListener('input', calculate);

calculate();


function loadFunctions() {
    apiSymbols();
    currencyChart();

}

function findCurrency(dropdown, values) {
    for(let i = 0; i < values.length; i++) {
        const val = values[i].join(', ');

        const opt = document.createElement("option");
        opt.textContent = val;
        opt.value = val;
        dropdown.appendChild(opt);
    }
}

function chartDataPoint(historicalData) {
    console.log('No real data', historicalData);

} 
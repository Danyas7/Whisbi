function loadFunctions() {
    apiSymbols();
}

function loadSymbols(dropdown, values) {
    for(let i = 0; i < values.length; i++) {
        const val = values[i].join(', ');

        const opt = document.createElement("option");
        opt.textContent = val;
        opt.value = val;
        dropdown.appendChild(opt);
    }
}

document.getElementById("currency-button").addEventListener("click", async () => {
    apiCurrency();
});
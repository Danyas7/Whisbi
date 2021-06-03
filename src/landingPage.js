

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

document.getElementById("currency-button").addEventListener("click", async () => {
   try {
       const deeDate = await apiHistorical();
       let data = await Promise.all(deeDate);
       data.map(item => JSON.parse(item.responseText));
       console.log('DATA', data.map(item => JSON.parse(item.responseText)));
   } catch(error) {
       console.error("error", error);
   }

})
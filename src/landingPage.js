function loadFunctions() {
    fillDropdownValues()
}
function fillDropdownValues() {
    const options = ["USD", "EUR", "PES", "MDO"];
    const currencyOne = document.getElementById("currencyOne");
    findCurrency(currencyOne, options)
    findCurrency(currencyTwo, options)
}
function findCurrency(dropdown, values) {
    for(var i = 0; i < values.length; i++) {
        var opt = values[i];

        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        dropdown.appendChild(el);
        dropdown.appendChild(el);
    }
}

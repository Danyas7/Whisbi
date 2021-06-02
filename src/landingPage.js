function loadFunctions() {
    apiRequest();
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

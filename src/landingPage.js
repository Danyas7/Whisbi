function loadFunctions() {
    apiRequest();
}

function findCurrency(dropdown, values) {
    for(var i = 0; i < values.length; i++) {
        var val = values[i];

        var opt = document.createElement("option");
        opt.textContent = val;
        opt.value = val;
        dropdown.appendChild(opt);
        dropdown.appendChild(opt);
    }
}

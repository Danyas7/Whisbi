function apiRequest() {
    // endpoint = 'latest'
    access_key = '391079608fe2657cbc41c006048b93df';
    let symbols;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.exchangeratesapi.io/v1/symbols?access_key=${access_key}`, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            symbols = JSON.parse(xhr.responseText);
            symbols  = Object.keys(symbols.symbols);
            const currencyOne = document.getElementById("currencyOne");
            const currencyTwo = document.getElementById("currencyTwo");
            findCurrency(currencyOne, symbols)
            findCurrency(currencyTwo, symbols)
        }
    }

    xhr.send("")
}
function apiRequest() {
    let baseUrl = "https://api.exchangeratesapi.io/v1/"
    // endpoint = 'latest'
    access_key = '391079608fe2657cbc41c006048b93df';
    let symbols;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${baseUrl}symbols?access_key=${access_key}`, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            symbols = JSON.parse(xhr.responseText);
            symbols  = Object.keys(symbols.symbols);
            const currencyOne = document.getElementById("currency-one");
            const currencyTwo = document.getElementById("currency-two");
            findCurrency(currencyOne, symbols)
            findCurrency(currencyTwo, symbols)
        } else {
            console.error(`Request failed. Request status of ${xhr.status}`)
            alert(`Request failed. Request status of ${xhr.status}`);
        }
    xhr.send("")
}
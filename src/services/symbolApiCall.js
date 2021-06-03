function apiSymbols()
{
    let baseUrl = "https://api.exchangeratesapi.io/v1/"
    let symbols;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${baseUrl}symbols?access_key=391079608fe2657cbc41c006048b93df`, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            symbols = JSON.parse(xhr.responseText);
            symbols = Object.entries(symbols.symbols);
            const currencyOne = document.getElementById("currency-one");
            const currencyTwo = document.getElementById("currency-two");
            findCurrency(currencyOne, symbols)
            findCurrency(currencyTwo, symbols)
        }
         else if (xhr.status !== 200){
            console.error(`Request failed. Request status of ${xhr.status}`)
            alert(`Request failed. Request status of ${xhr.status}`);
        }
    }
    xhr.send("")
}
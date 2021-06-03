function apiCurrency()
{
    const baseUrl = 'https://api.exchangeratesapi.io/v1/'
    const endpoint = 'convert'
    const date = document.getElementById("date").value
    const amount = document.getElementById("amount").value

    let firstCurrency = document.getElementById("currency-one").value
    const firstCurrencySymbol = firstCurrency.slice(0, 3);
    const firstCurrencyName = firstCurrency.slice(5);

    let secondCurrency = document.getElementById("currency-two").value
    const secondCurrencySymbol = secondCurrency.slice(0, 3);
    const secondCurrencyName = secondCurrency.slice(5);



    let symbols;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${baseUrl}${endpoint}?access_key=391079608fe2657cbc41c006048b93df&from=${firstCurrencySymbol}&to=${secondCurrencySymbol}&amount=${amount}&date=${date}`, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            symbols = JSON.parse(xhr.responseText);

            const resultStatementOne = document.getElementById("result-statement-one");
            const resultStatementTwo = document.getElementById("result-statement-two");
            const resultStatementThree = document.getElementById("result-statement-three");

            resultStatementOne.textContent = `1 ${firstCurrencyName} equals `;
            resultStatementOne.value = `1 ${firstCurrencyName} equals `;

            resultStatementTwo.textContent = `${symbols.info.rate} ${secondCurrencyName}`;
            resultStatementTwo.value = `${symbols.info.rate} ${secondCurrencyName}`;

            resultStatementThree.textContent = `${symbols.query.amount} ${firstCurrencyName} equals ${symbols.result} ${secondCurrencyName}`;
            resultStatementThree.value = `${symbols.query.amount} ${firstCurrencyName} equals ${symbols.result} ${secondCurrencyName}`;
        }
        else if (xhr.status !== 200){
            console.error(`Request failed. Request status of ${xhr.status}`)
            alert(`Request failed. Request status of ${xhr.status}`);
        }
    }
    xhr.send("")
}
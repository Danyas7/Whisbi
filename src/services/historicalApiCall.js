function apiHistorical()
{
    const baseUrl = 'https://api.exchangeratesapi.io/v1/'
    const startDate = document.getElementById("date").value;
    console.log('date', startDate);
    let endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth("YYYY-MM-DD") - 1);

    function formatDate(template, date) {
        var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':');
        date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4);
        return date.toISOString().split(/[-:.TZ]/).reduce(function(template, item, i) {
            return template.split(specs[i]).join(item);
        }, template);
    }

    const endpoint = formatDate('YYYY-MM-DD', endDate);
    const amount = document.getElementById("amount").value;

    let firstCurrency = document.getElementById("currency-one").value;
    const firstCurrencySymbol = firstCurrency.slice(0, 3);
    const firstCurrencyName = firstCurrency.slice(5);

    let secondCurrency = document.getElementById("currency-two").value;
    const secondCurrencySymbol = secondCurrency.slice(0, 3);
    const secondCurrencyName = secondCurrency.slice(5);



    let symbols;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${baseUrl}${endpoint}?access_key=391079608fe2657cbc41c006048b93df&symbols=${firstCurrencySymbol},${secondCurrencySymbol}`, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            symbols = JSON.parse(xhr.responseText);
            console.log('DATA', symbols)

            // const resultStatementOne = document.getElementById("result-statement-one");
            // const resultStatementTwo = document.getElementById("result-statement-two");
            // const resultStatementThree = document.getElementById("result-statement-three");
            //
            // resultStatementOne.textContent = `1 ${firstCurrencyName} equals `;
            // resultStatementOne.value = `1 ${firstCurrencyName} equals `;
            //
            // resultStatementTwo.textContent = `${symbols.info.rate} ${secondCurrencyName}`;
            // resultStatementTwo.value = `${symbols.info.rate} ${secondCurrencyName}`;
            //
            // resultStatementThree.textContent = `${symbols.query.amount} ${firstCurrencyName} equals ${symbols.result} ${secondCurrencyName}`;
            // resultStatementThree.value = `${symbols.query.amount} ${firstCurrencyName} equals ${symbols.result} ${secondCurrencyName}`;
        }
        else if (xhr.status !== 200){
            console.error(`Request failed. Request status of ${xhr.status}`)
            alert(`Request failed. Request status of ${xhr.status}`);
        }
    }
    xhr.send("")
}
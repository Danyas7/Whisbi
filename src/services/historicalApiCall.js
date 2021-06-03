async function apiHistorical()
{
    const baseUrl = 'https://api.exchangeratesapi.io/v1/'
    let datesArray = [];
    const startDate = document.getElementById("date").value;
    let endDate = new Date(startDate);

    for (let d = 0; d < 13; d++) {
        endDate.setMonth(endDate.getMonth("YYYY-MM-DD") - d);

        function formatDate(template, date) {
            var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':');
            date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4);
            return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
                return template.split(specs[i]).join(item);
            }, template);
        }

        let datePoint = formatDate('YYYY-MM-DD', endDate);
        datesArray.push(datePoint);
    }

    const amount = document.getElementById("amount").value;

    let firstCurrency = document.getElementById("currency-one").value;
    const firstCurrencySymbol = firstCurrency.slice(0, 3);
    const firstCurrencyName = firstCurrency.slice(5);

    let secondCurrency = document.getElementById("currency-two").value;
    const secondCurrencySymbol = secondCurrency.slice(0, 3);
    const secondCurrencyName = secondCurrency.slice(5);

    let symbols;
    let histData = [];
    const requests = new Array(datesArray.length);

    for (let x = 0; x < datesArray.length; x++) {
        requests[x] = new XMLHttpRequest();

        requests[x].open("GET", `${baseUrl}${datesArray[x]}?access_key=391079608fe2657cbc41c006048b93df&symbols=${firstCurrencySymbol},${secondCurrencySymbol}`, true);
        requests[x].onreadystatechange = () => {
            if (requests[x].readyState === XMLHttpRequest.DONE && requests[x].status === 200) {
                symbols = JSON.parse(requests[x].responseText);

                histData.push(symbols);

            } else if (requests[x].status !== 200) {
                console.error(`Request failed. Request status of ${requests[x].status}`)
                alert(`Request failed. Request status of ${requests[x].status}`);
            }
        }
        requests[x].send("")
    }
    await chartDataPoint(histData);
}
async function apiHistorical() {
    let symbols;
    let datesArray = [];
    let histData = [];
    const baseUrl = 'https://api.exchangeratesapi.io/v1/'
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

    var makeRequest = function (url, method) {

        // Create the XHR request
        var request = new XMLHttpRequest();

        // Return it as a Promise
        return new Promise(function (resolve, reject) {

            // Setup our listener to process compeleted requests
            request.onreadystatechange = function () {

                // Only run if the request is complete
                if (request.readyState !== 4) return;

                // Process the response
                if (request.status >= 200 && request.status < 300) {
                    // If successful
                    resolve(request);
                } else {
                    // If failed
                    reject({
                        status: request.status,
                        statusText: request.statusText
                    });
                }

            };

            // Setup our HTTP request
            request.open(method || 'GET', url, true);

            // Send the request
            request.send();

        });
    };
    return datesArray.map(date => makeRequest(`${baseUrl}${date}?access_key=391079608fe2657cbc41c006048b93df&symbols=${firstCurrencySymbol},${secondCurrencySymbol}`, "GET"))
}
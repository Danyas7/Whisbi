async function apiHistorical() {
    // let symbols;
    let datesArray = [];
    let histData = [];
    const baseUrl = 'https://api.exchangeratesapi.io/v1/'
    const amount = document.getElementById("amount").value;

    const startDate = document.getElementById("date").value;
    let endDate = new Date(startDate);

    let firstCurrency = document.getElementById("currency-one").value;
    const firstCurrencySymbol = firstCurrency.slice(0, 3);
    const firstCurrencyName = firstCurrency.slice(5);

    let secondCurrency = document.getElementById("currency-two").value;
    const secondCurrencySymbol = secondCurrency.slice(0, 3);
    const secondCurrencyName = secondCurrency.slice(5);

    // const requests = new Array(datesArray.length);

    const formatDate = (template, date) => {
        const specs = 'YYYY:MM:DD:HH:mm:ss'.split(':');
        date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4);
        return date.toISOString().split(/[-:.TZ]/).reduce((template, item, i) =>
            template.split(specs[i]).join(item), template);
    };

    for (let d = 0; d < 13; d++) {
        endDate.setMonth(endDate.getMonth("YYYY-MM-DD") - d);
        let datePoint = formatDate('YYYY-MM-DD', endDate);
        datesArray.push(datePoint);
    };


    const makeRequest = (url, method) => {

        // Create the XHR request
        const request = new XMLHttpRequest();

        // Return it as a Promise
        return new Promise((resolve, reject) => {

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
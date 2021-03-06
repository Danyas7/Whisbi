let firstCurData, secondCurData, currencyCodeOne, currencyCodeTwo;

document.getElementById("currency-button").addEventListener("click", async () => {
    try {
        const histData = await apiHistorical();
        let data = await Promise.all(histData);
        data = data.map(item => JSON.parse(item.responseText));

        currencyCodeOne = Object.keys(data[0].rates)[0];
        currencyCodeTwo = Object.keys(data[0].rates)[1];

        firstCurData = data.map(byDate => (
            {
                x: new Date(byDate.date),
                y: byDate.rates[Object.keys(byDate.rates)[0]]
            }
        ));
        secondCurData = data.map(byDate => (
            {
                x: new Date(byDate.date),
                y: byDate.rates[Object.keys(byDate.rates)[1]]
            }
        ));
  
    } catch(error) {
        console.error("error", error);
    }

    const chart = new CanvasJS.Chart("chartContainer",
        {
            animationEnabled: true,
            title: {
                text: " Historical Currency Exchange"
            },
            axisX: {
                title: "Date",
                valueFormatString: "MMM YYYY"
            },
            axisY: {
                title: "Exchange Rate"
            },
            legend: {
                verticalAlign: "top",
                horizontalAlign: "center",
                dockInsidePlotArea: true
            },
            data: [
                {
                    type: "line",
                    color: "rgba(255,12,32,.3)",
                    name: currencyCodeOne,
                    showInLegend: true,
                    dataPoints: firstCurData
                },
                {
                    type: "line",
                    color: "rgba(55,12,232,.3)",
                    name: currencyCodeTwo,
                    showInLegend: true,
                    dataPoints: secondCurData
                },
            ]
        });
    chart.render();
})

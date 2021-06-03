function currencyChart() {
    const chart = new CanvasJS.Chart("chartContainer1",
        {
            animationEnabled: true,
            title: {
                text: "Spline Area Chart"
            },
            axisX: {
                interval: 10,
            },
            data: [
                {
                    type: "splineArea",
                    color: "rgba(255,12,32,.3)",
                    dataPoints: [
                        {x: new Date(1992, 0), y: 2506000},
                        {x: new Date(1993, 0), y: 2798000},
                        {x: new Date(1994, 0), y: 3386000},
                        {x: new Date(1995, 0), y: 6944000},
                        {x: new Date(1996, 0), y: 6026000},
                        {x: new Date(1997, 0), y: 2394000},
                        {x: new Date(1998, 0), y: 1872000},
                        {x: new Date(1999, 0), y: 2140000},
                        {x: new Date(2000, 0), y: 7289000},
                        {x: new Date(2001, 0), y: 4830000},
                        {x: new Date(2002, 0), y: 2009000},
                        {x: new Date(2003, 0), y: 2840000},
                        {x: new Date(2004, 0), y: 2396000},
                        {x: new Date(2005, 0), y: 1613000},
                        {x: new Date(2006, 0), y: 2821000}
                    ]
                },
            ]
        });
    chart.render();
}
document.addEventListener('DOMContentLoaded', () => {
    const chart = new Highcharts.chart({
        chart: {
            renderTo: 'container',
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [
            {
            name: 'Jane',            
            type: 'pie',
            data: [
                ['Apples', 1],
                ['Bananas', 2],
                ['Oranges', 4]
            ]
        }    
    ]
    });

    // const series = {...chart.series[0]};
    // series.name = 'Jack';
    // chart.series.push(series);
    

});
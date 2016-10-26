/**
 * Created by Puyush Goel on 10/26/2016.
 */
function drawChart() {
    var data = google.visualization.arrayToDataTable
    ([['Months', 'Incidents'],
        ['January',  103],
        ['February',  72],
        ['March',  110],
        ['April', 153],
        ['May',  201],
        ['June', 233],
        ['July',  190],
        ['August', 140],
        ['September', 127],
        ['October', 134],
    ]);

    var options = {
        legend: 'none',
        hAxis: { minValue: 0, maxValue: 9 },
        curveType: 'function',
        pointSize: 20,
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
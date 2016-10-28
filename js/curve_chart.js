/**
 * Created by Puyush Goel on 10/26/2016.
 */
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Months', '2016 Incidents', '2015 Incidents'],
        ['January',  103,      38],
        ['February',  73,      14],
        ['March',  110,       22],
        ['April',  153,      21],
        ['May',  201,      35],
        ['June',  233,      30],
        ['July',  190,      41],
        ['August',  140,      29],
        ['September',  127,      17],
        ['October',  144,      54],
        ['November',  ,      53],
        ['December',  ,      51],
    ]);

    var options = {
        title: 'Terrorist Attacks (2015 - 2016)',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    chart.draw(data, options);
}
/**
 * Created by Puyush Goel on 10/29/2016.
 */
/**
 * Created by Puyush Goel on 10/26/2016.
 */
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['% Number of Incidents (2015 - 2016)', 'Month of Incident'],
        [1,  103],
        [2,  73],
        [3,  110],
        [4,  153],
        [5,  201],
        [6,  233],
        [7,  190],
        [8,  140],
        [9,  127],
        [10,  144],
        [11,  null],
        [12,  null],
        //2015 data
        [1,  38],
        [2, 14],
        [3,  22],
        [4,  21],
        [5,  35],
        [6, 30],
        [7,   41],
        [8,  29],
        [9, 17],
        [10,  54],
        [11, 53],
        [12, 51],
        [1,  54],
        [2, 44],
        [3,  26],
        [4,  14],
        [5,  19],
        [6, 44],
        [7,   2],
        [8,  1],
        [9, 4],
        [10,  9],
        [11, 24],
        [12, 17],
        [1,  20],
        [2, 20],
        [3,  17],
        [4,  16],
        [5,  11],
        [6, 22],
        [7,   45],
        [8,  30],
        [9, 10],
        [10,  21],
        [11, 2],
        [12, 8],

        ]);
        var options = {
            animation: {
                startup: 'true',
                duration: 500,
                easing: 'InAndOut'
            },
            title: 'Increasing of Terrorism Incidents',
            legend: 'right',
            hAxis: {
                title: 'Incidents',
                viewWindowMode: 'explicit',
                viewWindow: {
                    max: 12,
                    min: 1
                },
                textStyle: {
                    fontName: 'Karla',
                    fontSize: '18'
                }
            },
            vAxis: {
                title: 'Months of the Incidents',
                viewWindowMode: 'explicit',
                viewWindow: {
                    max: 250,
                    min: 0
                }
            },
            trendlines: {
                0: {
                    type: 'exponential',
                    color: '7cbb00',
                    lineWidth: 5,
                    opacity: 0.5,
                    visibleInLegend: false,
                    tooltip: false
                }
            },
            backgroundColor: '#f4f6f7'

        };

    var chart = new google.visualization.ScatterChart(document.getElementById('scatter'));
    chart.draw(data, options);
}
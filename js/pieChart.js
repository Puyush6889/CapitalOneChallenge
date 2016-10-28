/**
 * Created by Puyush Goel on 10/24/2016.
 */
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Months', 'Incidents Reports 2016'],
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
        title: '2016 Incidents of Terrorist attacks worldwide by different Month( 1 incidents >= 10 deaths)',
        is3D: true,
        slices: {
            0: {offset: 0.1, color: '#7F8C8D'},
            1: {offset: 0.1, color: '#76448A'},
            2: {offset: 0.1, color: '#2874A6'},
            3: {offset: 0.1, color: '#BA4A00'},
            4: {offset: 0.1, color: '#8B0000'},
            5: {offset: 0.1, color: '#FF0000'},
            6: {offset: 0.1, color: '#7B241C'},
            7: {offset: 0.1, color: '#D4AC0D'},
            8: {offset: 0.1, color: '#1E8449'},
            9: {offset: 0.1, color: '#BDC3C7'},
        },
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}


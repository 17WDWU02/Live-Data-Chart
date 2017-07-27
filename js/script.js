var i = 0;
var data;
var chart;

var options = {
	title: "counting by 1",
	hAxis: {
		viewWindow: {
			min : 0,
			max : 100
		}
	}
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
	data = new google.visualization.DataTable();
	data.addColumn('string', 'Bar');
	data.addColumn('number', 'Count');

	data.addRow(['bar', i]);


	chart = new google.visualization.BarChart(document.getElementById("chart"));
	chart.draw(data, options);
	setTimeout(redraw, 2000);
}

function redraw(){
	i++;
	data.setValue(0, 1, i);
	chart.draw(data, options)
	setTimeout(redraw, 2000);
}







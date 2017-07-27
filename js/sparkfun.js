var data;
var chart;
var publicKey = 'roLAE1JNWRFw2ax9pljo';

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

var options = {
	hAxis:{
		title: 'Record'
	},
	vAxis: {
		title: 'Soil Moisture'
	}
}

function drawChart(){
	$.ajax({
		url: "https://data.sparkfun.com/output/" + publicKey + ".json",
		// url:"https://dweet.io/get/latest/dweet/for/my-thing-name",
		data: {page: 1},
		dataType: "jsonp",
		success: function(DataFromJSON){
			// console.log(DataFromJSON);
			data = new google.visualization.DataTable();
			data.addColumn('number', 'Record');
			data.addColumn('number', 'soilmoisture');
			
			for (var i = 0; i < 100; i++) {
				data.addRow([i, parseFloat(DataFromJSON[i].soilmoisture)]);
			};
			chart = new google.visualization.LineChart(document.getElementById('chart'));
			chart.draw(data, options);
			setTimeout(drawChart, 5000);
		},
		error: function(){
			console.log("Can't Connect to Server");
		}
	});
}














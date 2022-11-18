//https://www.highcharts.com/demo/bar-basic
//<script src="https://code.highcharts.com/highcharts.js"></script>
//<script src="https://code.highcharts.com/modules/exporting.js"></script>
//<script src="https://code.highcharts.com/modules/export-data.js"></script>
//<script src="https://code.highcharts.com/modules/accessibility.js"></script>
//Grafic de barres 
$( document ).ready(function() {
  $.ajax({
    type: "Get",
    url: "php/select1.php",
    dataType: "json",
    success: function(data) {
        barresCol(data);
    },
    error: function(){
        alert("json not found");
    }
  });

  $.ajax({
    type: "Get",
    url: "php/select2.php",
    dataType: "json",
    success: function(data) {
      pieChar(data);
    },
    error: function(){
        alert("json not found");
    }
  });

  $.ajax({
    type: "Get",
    url: "php/select3.php",
    dataType: "json",
    success: function(data) {
      box(data);
    },
    error: function(){
        alert("json not found");
    }
  });
});
function barresCol(data){
    
  var dat = [];
  for (var i = 0; i < data.length; i++){
    var obj = JSON.parse(JSON.stringify(data[i]));
    var data2 = [obj.floors, parseInt(obj.numFl)];
    dat.push(data2);
  }

    Highcharts.chart('container', {
        chart: {
          type: 'column'
        },
        title: {
          text: ''
        },
        xAxis: {
          type: 'category',
          labels: {
            rotation: -45,
            style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
            }
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Number of buldings'
          }
        },
        legend: {
          enabled: false
        },
        tooltip: {
          pointFormat: 'Number of buildings: <b>{point.y:.1f} </b>'
        },
        series: [{
          name: 'Population',
          data: dat,
          dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
            }
          }
        }]
      });
       
}
function pieChar(data){
  var dat1 = [];
  var dat2= [];
  for (var i = 0; i < data.length; i++){
    var obj = JSON.parse(JSON.stringify(data[i]));
    obj.loc=parseInt(obj.loc);
    dat1.push(obj.bathrooms);
    dat2.push(obj.loc);
  }
  Highcharts.chart('container2', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Summation of number of bathrooms on a bulding'
    },
    
    xAxis: {
      categories: dat1,
      title: {
        text: 'Number of bathrooms on a bulding'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Bathrooms',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ' millions'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Number of Buildings',
      data: dat2
    
    }]
  });
}

function box(data){
  var dat2= [];
  for (var i = 0; i < data.length; i++){
    var obj = JSON.parse(JSON.stringify(data[i]));
    obj.sqft_above=parseInt(obj.sqft_above);
    dat2.push(obj.sqft_above);
  }
  Highcharts.chart('container3', {

    title: {
      text: 'Sqft abrove of buldings of 1 floor'
    },
  
    
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },
  
    series: [{
      
      data: dat2
    }, ],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });
}
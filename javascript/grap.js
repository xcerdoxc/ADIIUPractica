//https://www.highcharts.com/demo/bar-basic
//<script src="https://code.highcharts.com/highcharts.js"></script>
//<script src="https://code.highcharts.com/modules/exporting.js"></script>
//<script src="https://code.highcharts.com/modules/export-data.js"></script>
//<script src="https://code.highcharts.com/modules/accessibility.js"></script>
//Grafic de barres 
$( document ).ready(function() {
  $.ajax({
    type: "Get",
    url: "select1.php",
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
    url: "select2.php",
    dataType: "json",
    success: function(data) {
      pieChar(data);
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
          text: 'World\'s largest cities per 2021'
        },
        subtitle: {
          text: 'Source: <a href="https://worldpopulationreview.com/world-cities" target="_blank">World Population Review</a>'
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
            text: 'Population (millions)'
          }
        },
        legend: {
          enabled: false
        },
        tooltip: {
          pointFormat: 'Population in 2021: <b>{point.y:.1f} millions</b>'
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
Highcharts.chart('container2', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Browser market shares in May, 2020'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Chrome',
        y: 70.67,
        sliced: true,
        selected: true
      }, {
        name: 'Edge',
        y: 14.77
      },  {
        name: 'Firefox',
        y: 4.86
      }, {
        name: 'Safari',
        y: 2.63
      }, {
        name: 'Internet Explorer',
        y: 1.53
      },  {
        name: 'Opera',
        y: 1.40
      }, {
        name: 'Sogou Explorer',
        y: 0.84
      }, {
        name: 'QQ',
        y: 0.51
      }, {
        name: 'Other',
        y: 2.6
      }]
    }]
  });
}

function box(){
    Highcharts.chart('container3', {

        chart: {
          type: 'boxplot'
        },
      
        title: {
          text: 'Highcharts Box Plot Example'
        },
      
        legend: {
          enabled: false
        },
      
        xAxis: {
          categories: ['1', '2', '3', '4', '5'],
          title: {
            text: 'Experiment No.'
          }
        },
      
        yAxis: {
          title: {
            text: 'Observations'
          },
          plotLines: [{
            value: 932,
            color: 'red',
            width: 1,
            label: {
              text: 'Theoretical mean: 932',
              align: 'center',
              style: {
                color: 'gray'
              }
            }
          }]
        },
      
        series: [{
          name: 'Observations',
          data: [
            [760, 801, 848, 895, 965],
            [733, 853, 939, 980, 1080],
            [714, 762, 817, 870, 918],
            [724, 802, 806, 871, 950],
            [834, 836, 864, 882, 910]
          ],
          tooltip: {
            headerFormat: '<em>Experiment No {point.key}</em><br/>'
          }
        }, {
          name: 'Outliers',
          color: Highcharts.getOptions().colors[0],
          type: 'scatter',
          data: [ // x, y positions where 0 is the first category
            [0, 644],
            [4, 718],
            [4, 951],
            [4, 969]
          ],
          marker: {
            fillColor: 'white',
            lineWidth: 1,
            lineColor: Highcharts.getOptions().colors[0]
          },
          tooltip: {
            pointFormat: 'Observation: {point.y}'
          }
        }]
      
      });
}
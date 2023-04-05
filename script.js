
let tBody=document.querySelector('#tableBody')
let cnum=0;
function initailData()
{
fetch("https://api.covid19api.com/summary")
.then(data=>data.json())
.then(data=>dashboard(data.Countries))
}
initailData();

function dashboard(country)
{

// country.forEach(element => {
//     tBody.innerHTML +=
//         ` <tr class="table-" id="row">
//                         <th id='countryName'>${element.Country}</th>
//                         <td id="confirmed">${element.TotalConfirmed}</td>
//                         <td id="death">${element.TotalDeaths}</td>
//                         <td id="recovered">${element.TotalRecovered}</td>
//                         <td id="newConfirmed">${element.NewConfirmed}</td>
//                     </tr>`
// });
tBody.innerHTML =" ";
console.log("in",cnum,country)
for(i=cnum;i<=(cnum+10);i++)
{ 

    if(i < 192)
    {
    tBody.innerHTML +=
        ` <tr class="table-" id="row">
                        <th id='countryName'>${country[i].Country}</th>
                        <td id="confirmed">${country[i].TotalConfirmed}</td>
                        <td id="death">${country[i].TotalDeaths}</td>
                        <td id="recovered">${country[i].TotalRecovered}</td>
                        <td id="newConfirmed">${country[i].NewConfirmed}</td>
                    </tr>`
                }
}
}
    
var myform = document.getElementById('myform');
myform.addEventListener('submit', function (e) {
    e.preventDefault();
    var country = document.getElementById('country').value
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
         
    fetch('https://api.covid19api.com/total/dayone/country/' + country, requestOption)
        .then(res => res.json())
        .then((res) => {
            console.log(res);
            var length = res.length;
            var index = length - 1;
            var confirmed = document.getElementById('confirmed');
            var recovered = document.getElementById('recovered');
            var deaths = document.getElementById('deaths');
            confirmed.innerHTML = 'Confirmed: ' + res[index].Confirmed;
            recovered.innerHTML = 'recovered: ' + res[index].Recovered;
            deaths.innerHTML = 'Deaths: ' + res[index].Deaths;
        })
        .catch(error => console.log('error', error));
                });
async function crds(){
// chart;
  // const deathschartCtx = document.getElementById('deaths-chart').getContext('2d')
  // const confirmedchartCtx = document.getElementById('confirmed-chart').getContext('2d')
  // const recoveredchartCtx = document.getElementById('recovered-chart').getContext('2d')

fetch('https://api.covid19api.com/total/dayone/country/indonesia/status/recovered')
    .then(response => response.json())
    .then(data => {
        const labels = data.map(entry => entry.Date);
        const values = data.map(entry => entry.Cases);
        new Chart(recoveredchartCtx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: ' recovered',
                    data: values,
                    backgroundColor: 'blue'
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: ' recovered'
                }
            }
        });
    });
  }
  crds();
  //
    var url = `https://api.covid19api.com/world/total`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        
      
        var card = `<div class="card bg-warning">
         <h1>Total Confirmed</h1>
         <h2>${data.TotalConfirmed} </h2>
         </div>
         <div class="card bg-warning">
         <h1>Total Death</h1>
         <h2>${data.TotalDeaths} </h2>
         </div>
         <div class="card bg-warning">
         <h1>Total Recovery</h1>
         <h2>${data.TotalRecovered} </h2>
         </div>`
    
         document.querySelector("#cards").innerHTML = card;
    
         Highcharts.chart('chart3', {
          chart: {
            type: 'column'
          },
          title: {
            align: 'left',
            text: ''
          },
          subtitle: {
            align: 'left',
            text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
          },
          accessibility: {
            announceNewData: {
              enabled: true
            }
          },
          xAxis: {
            type: 'category'
          },
          yAxis: {
            title: {
              text: 'Total percent market share'
            }
        
          },
          legend: {
            enabled: false
          },
          plotOptions: {
            series: {
              borderWidth: 0,
              dataLabels: {
                enabled: true,
                format: '{point.y:.1f}'
              }
            }
          },
        
          tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}'
          },
        
          series: [
            {
              name: 'Information',
              colorByPoint: true,
              data: [
                {
                  name: 'Total Confirmed',
                  y: data.TotalConfirmed,
                  drilldown: 'Chrome'
                },
                {
                  name: 'Total Deaths',
                  y:data.TotalDeaths,
                  drilldown: 'Safari'
                },
                {
                  name: 'Total Recovered',
                  y: data.TotalRecovered,
                  drilldown: 'Firefox'
                }
               ]
             }
           ]
          });
          }).catch(error => console.error(error))



    var dailyDataCountry = new Array();
    function searchCountries() {
      let searhc='https://api.covid19api.com/live/country/'
        let inputCountry = document.getElementById('country').value;
        console.log(inputCountry);
        fetch(`${searhc}${inputCountry}`)
            .then(respose => respose.json())
            .then(data => {
                  // Data retrieved from https://www.ssb.no/energi-og-industri/olje-og-gass/statistikk/sal-av-petroleumsprodukt/artik
Highcharts.chart('charts', {
  title: {
    text: data[0].Country,
    align: 'left'
  },
  xAxis: {
    categories: ['Total Conf', 'Death', 'New', 'Diesel','new deaths']
  },
  yAxis: {
    title: {
      text: 'Peoples'
    }
  },
  tooltip: {
    valueSuffix: ' million liters'
  },
  series: [{
    type: 'column',
    name: '2020',
    data: [parseFloat(data[0].Confirmed), parseFloat(data[0].Deaths), parseFloat(data[0].Recovered), parseFloat(data[0].Active)]
  }]
  });
                function updateChart() {
                    let chart = Highcharts.charts[0];
                    chart.series[0].setData(dailyDataCountry);
                }
            })
    }
    //deaths
        var url = `https://api.covid19api.com/live/country/south-africa/status/deat`
        fetch(url)
       .then(response => response.json())
       .then(data => {
    
        var datas = data.Deaths;
        console.log(data);
         draw(data);
       
        var card = `<"div class="card bg-warning">
        <div class="card bg-warning">
            <div class=charts></div>
       <h1></h1>
        
       </div>`
    
 
  
        })
        document.getElementById('container').innerHTML = card;
        function draw(info){
       Highcharts.chart('charts', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'TOTAL DEATHS '
      },
      xAxis: {
        categories: [
          'total',
          'death',
          'recovered'
        ]
      },
      yAxis: [{
        min: 0,
        title: {
          text: 'Employees'
        }
      }, {
        title: {
          text: 'Profit (millions)'
        },
        opposite: true
      }],
      legend: {
        shadow: false
             },
             tooltip: {
        shared: true
      },
      plotOptions: {
        column: {
          grouping: false,
          shadow: false,
          borderWidth: 0
        }
      },
           ries: [{
       name: 'Employees',
       color: 'rgba(165,170,217,1)',
       data: [info[0].Deaths,info[0].Confirmed,info[0].Active],
       pointPadding: 0.3,
       pointPlacement: -0.2
        }, {
       name: 'Employees Optimized',
       color: 'rgba(126,86,134,.9)',
       data: [info[1].Deaths,info[1].Confirmed,info[1].Active],
       pointPadding: 0.4,
       pointPlacement: -0.2
        }, {
       name: 'Profit',
       color: 'rgba(248,161,63,1)',
       data:[info[2].Deaths,info[2].Confirmed,info[2].Active],
       tooltip: {
         valuePrefix: '$',
          valueSuffix: ' M'
        },
        pointPadding: 0.3,
        pointPlacement: 0.2,
        yAxis: 1
          }, {
        name: 'Profit Optimized',
        color: 'rgba(186,60,61,.9)',
        data: [info[3].Deaths,info[3].Confirmed,info[3].Active],
        tooltip: {
          valuePrefix: '$',
          valueSuffix: ' M'
           },
           pointPadding: 0.4,
       ointPlacement: 0.2,
       Axis: 1
       }]
       });
       }
      
      
      
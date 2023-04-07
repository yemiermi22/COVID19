   my table contain confirmed,deaths,recovery
   <table id="tablebody" >
    <thead>
      <tr>
        <th>Country</th>
        <th>Total confirmed</th>
        <th>Total Deaths</th>
        <th>Total Recovered</th>
      </tr>
    for this  covid19 code i use  html and css, JavaScript files, including the Bootstrap and Highcharts libraries, as well as jQuery and DataTables.
 i also use  Highcharts library,for bar chart,pie chart and totally i use 5 char 2 bar chart and 2 pie chart and 1 bar  chart for search

       The <body> section contains various HTML elements that display the content of the page.

 These include a navigation bar, several containers with cards and charts, and a table displaying COVID-19 data for different countries.

The embedded JavaScript code fetches data from the COVID-19 API and uses it to update the content of the page. Specifically, it fetches global COVID-19 data from the API, generates cards displaying the total confirmed cases, deaths, and recoveries worldwide, and updates the relevant HTML elements with this information.

Overall, this code uses HTML, js, and JavaScript to create a dynamic web page that displays COVID-19 statistics for different countries, using various libraries to provide functionality and visualizations.
       
       The JavaScript code is responsible for fetching data from the COVID-19 API using the fetch() method and then manipulating the HTML DOM to display the data.

The JavaScript code also includes the Highcharts library, which is used to generate graphs and charts based on the fetched data. It includes various modules such as exporting, export-data, and accessibility, which enhance the chart's functionality.
  
       this are the api i use for covid19 chart 
    https://api.covid19api.com/world/total`
   (`https://api.covid19api.com/country/${country}`)
   (`https://api.covid19api.com/country/south-africa/confirmed`)
      (`https://api.covid19api.com/country/south-africa/deaths`)
      (`https://api.covid19api.com/country/south-africa/recovery`)
"https://api.covid19api.com/summary",
for search as whole world
for confirmed
for recovery
for deaths
for for total
 
         country.forEach(element => {
//     tBody.innerHTML +=
//         ` <tr class="table-" id="row">
//                         <th id='countryName'>${element.Country}</th>
//                         <td id="confirmed">${element.TotalConfirmed}</td>
//                         <td id="death">${element.TotalDeaths}</td>
//                         <td id="recovered">${element.TotalRecovered}</td>
//                         <td id="newConfirmed">${element.NewConfirmed}</td>
//                     </tr>`
       
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
       




      

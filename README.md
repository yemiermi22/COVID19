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

   this are the api for covid i use 5 covid api 
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
 <div class="container"></div>
    <div id="charts"></div>
         <div id="table">
    <div class="container">
        <div class="row">
        </div>
      </div> 
      i also use a card and container 
         country.forEach(element => {
//     tBody.innerHTML +=
//         ` <tr class="table-" id="row">
//                         <th id='countryName'>${element.Country}</th>
//                         <td id="confirmed">${element.TotalConfirmed}</td>
//                         <td id="death">${element.TotalDeaths}</td>
//                         <td id="recovered">${element.TotalRecovered}</td>
//                         <td id="newConfirmed">${element.NewConfirmed}</td>
//                     </tr>`
         var url = `https://api.covid19api.com/world/total`

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
                i use this api for  each country and its for total  confirmed,  total  recovery, total deaths
                




      

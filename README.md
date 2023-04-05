my table contain confirmed,deaths,recovery
<table id="tablebody" >
    <thead>
      <tr>
        <th>Country</th>
        <th>Total confirmed</th>
        <th>Total Deaths</th>
        <th>Total Recovered</th>
      </tr>
    this code use 
  html and css, JavaScript files, including the Bootstrap and Highcharts libraries, as well as jQuery and DataTables.



     

 i also use  Highcharts library,

this are the api for covid i use 5 covid api 
`https://api.covid19api.com/world/total`
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



      

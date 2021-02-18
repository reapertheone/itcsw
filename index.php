<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Tests</title>
</head>
<body>
    <table>
        <tr>
            <td>API used</td>
            <td>API description</td>
            <td></td>
        </tr>
        <tr>
            <td>Weather</td>
            <td><a href="https://www.geonames.org/export/JSON-webservices.html#weatherJSON">Desc</a></td>
            <td><button id="getWeather">Try</button></td>
        </tr>
        <tr>
            <td>CountryCode</td>
            <td><a href="https://www.geonames.org/export/web-services.html#countrycode">DESC</a></td>
            <td><button id="getCountryCode">Try</button></td>
        </tr>
        <tr>
            <td>Timezone</td>
            <td><a href="https://www.geonames.org/export/web-services.html#timezone">DESC</a></td>
            <td><button id="getTimeZone">Try</button></td>
        </tr>
        
    </table>
    <div id="result"></div>
    <script src="libs/js/jquery-2.2.3.min.js"></script>
    <script src="libs/js/scripts.js"></script>
    
</body>
</html>
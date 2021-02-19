<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <label>Latitude</label>
    <input type="number" step="0.01" id="lat" placeholder="46.03">
    <label>Longtitude</label>
    <input type="number" step="0.01" id="lng" placeholder="10.2">

    <button id="getTimeZone">Submit</button>
    <div id="result"></div>
    

    <script src="./libs/js/jquery-2.2.3.min.js"></script>
    <script src="./libs/js/scripts.js"></script>
</body>
</html>
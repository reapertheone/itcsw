<?php
	$url="http://api.geonames.org/timezoneJSON?formatted=true&lat=". $_REQUEST['lat'] ."&lng=". $_REQUEST['lng'] ."&username=gergo&style=full";
	//echo $url;
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);

	$result=curl_exec($ch);

	curl_close($ch);

	$decode = json_decode($result,true);	

    //echo $decode;

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['data'] = $decode;
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 
	?>




<?php
error_log("proxy hit");

header('Content-Type: application/javascript');
header('Access-Control-Allow-Origin: *');
//echo $_GET['request'];

$headers = "Accept:application/javascript\r\n";
//$headers .= "Accept-Encoding:gzip,deflate,sdch\r\n";
$headers .= "Accept-Language:en-US,en;q=0.8\r\n";
$headers .= "Cache-Control:max-age=0\r\n";
$headers .= "Connection:keep-alive\r\n";
$headers .= "<Add your nozbe cookies here>";
$headers .= "Host:webapp.nozbe.com\r\n";
$headers .= "User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36\r\n";

$opts = array(
'http'=>array(
	    'method'=>"GET",
	    'header'=>$headers
	)
);

$context  = stream_context_create($opts);
$response = file_get_contents($_GET['endpoint'], false, $context, -1, 40000);

error_log($response);
echo $response;

//var_dump(file_get_contents('http://localhost/dump.php', false, $context));
/*
echo <<<output
[{"id":"33b5112212","name":"Inbox","count":"47"},{"id":"f0ac1c3b70","name":"Outware","count":"1"},{"id":"4520113c69","name":"Axiom","count":"1"},{"id":"1b2d192e2b","name":"Boat","count":"4"},{"id":"5c121142c2","name":"buy","count":"19"},{"id":"3c6c121c48","name":"car","count":"34"},{"id":"f9fe192e2d","name":"catena","count":"6"},{"id":"b0611bef59","name":"Coding","count":"9"},{"id":"f8391c2f0e","name":"crowdready","count":"8"},{"id":"c60b124ad1","name":"Expense Tracker","count":"1"},{"id":"b8be1bab20","name":"Featurefight","count":"1"},{"id":"bdf2113dd4","name":"Fitness","count":"4"},{"id":"552c1bef5e","name":"Friends","count":"2"},{"id":"6ef011cf47","name":"Jobs and ventures","count":"8"},{"id":"6c621bd0fb","name":"learn","count":"24"},{"id":"f15911a962","name":"Life goals","count":"2"},{"id":"d604192e2c","name":"life management","count":"7"},{"id":"e1a211373d","name":"Link.Me","count":"5"},{"id":"313a112215","name":"Money","count":"10"},{"id":"4a9c112b56","name":"music","count":"3"},{"id":"f04711b882","name":"New Job","count":"9"},{"id":"85651572ae","name":"Small projects","count":"4"},{"id":"20a712735e","name":"shed and yard","count":"7"},{"id":"92521bdf47","name":"Someday","count":"6"},{"id":"172d1be427","name":"things to do","count":"9"},{"id":"6178124ab5","name":"trip","count":"6"}]
output;
*/

<?php
header('Content-Type: application/json');

// Read JSON data from a file
$json_data = file_get_contents('us_states_and_territories.json');

// Output the JSON data
echo $json_data;
?>

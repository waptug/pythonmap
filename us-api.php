<?php

// Read JSON file
$json_file_path = 'us.json';
$json_data = file_get_contents($json_file_path);
$data = json_decode($json_data, true);

// Define REST endpoint
if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['state'])) {
    $state = $_GET['state'];
    $filtered_data = array_filter($data, function($row) use ($state) {
        return $row['Alaska'] == $state;
    });
    header('Content-Type: application/json');
    echo json_encode($filtered_data);
} else {
    header('HTTP/1.1 405 Method Not Allowed');
    header('Allow: GET');
    echo 'Method Not Allowed';
}
<?php

// Read JSON file
$json_file_path = 'path/to/us.json';
$json_data = file_get_contents($json_file_path);
$data = json_decode($json_data, true);

// Define REST endpoint
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $filtered_data = $data;
    foreach ($_GET as $key => $value) {
        if (array_key_exists($key, $data[0])) {
            $filtered_data = array_filter($filtered_data, function($row) use ($key, $value) {
                return $row[$key] == $value;
            });
        }
    }
    header('Content-Type: application/json');
    echo json_encode(array_values($filtered_data));
} else {
    header('HTTP/1.1 405 Method Not Allowed');
    header('Allow: GET');
    echo 'Method Not Allowed';
}
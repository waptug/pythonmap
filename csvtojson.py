import csv
import json

# csv_file_path = 'us.csv'
# json_file_path = 'us.json'
csv_file_path = 'Washington CitiesGeocoded.csv'
json_file_path = 'Washington CitiesGeocoded.json'

# Read CSV file and convert it to a list of dictionaries
with open(csv_file_path, 'r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    data = [row for row in csv_reader]

# Write data to JSON file
with open(json_file_path, 'w') as json_file:
    json.dump(data, json_file)
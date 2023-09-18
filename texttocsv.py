import csv

with open('us.txt', 'r') as tsvfile:
    reader = csv.reader(tsvfile, delimiter='\t')
    with open('us.csv', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        for row in reader:
            writer.writerow(row)
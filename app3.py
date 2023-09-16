import json

class JavascriptMapGenerator:
    def __init__(self, filename='map.js'):
        self.filename = filename
        self.javascript_code = []

    def add_code(self, code):
        self.javascript_code.append(code)

    def write_to_file(self):
        with open(self.filename, 'w') as f:
            for line in self.javascript_code:
                f.write(f"{line}\n")

# Load data from JSON file
with open('us_states_and_territories.json', 'r') as f:
    data_json = json.load(f)
    locations = data_json['locations']

# Initialize JavascriptMapGenerator
js_gen = JavascriptMapGenerator()

# ... (rest of the code remains the same, but use 'locations' instead of 'data')



class JavascriptMapGenerator:
    def __init__(self, filename='map.js'):
        self.filename = filename
        self.javascript_code = []

    def add_code(self, code):
        self.javascript_code.append(code)

    def write_to_file(self):
        with open(self.filename, 'w') as f:
            for line in self.javascript_code:
                f.write(f"{line}\n")

# Initialize JavascriptMapGenerator
js_gen = JavascriptMapGenerator()

# JavaScript code for initializing map using Leaflet.js
js_gen.add_code("class USAMap {")
js_gen.add_code("  constructor() {")
js_gen.add_code("    this.map = L.map('map').setView([37.0902, -95.7129], 4);")
js_gen.add_code("    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {")
js_gen.add_code("      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'")
js_gen.add_code("    }).addTo(this.map);")
js_gen.add_code("  }")

# Add data for all the states and territories
data = {
    'State': ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
              'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
              'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
              'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
              'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
              'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
              'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
              'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
              'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
              'West Virginia', 'Wisconsin', 'Wyoming', 'Guam', 'Northern Mariana Islands',
              'Puerto Rico', 'American Samoa', 'U.S. Virgin Islands'],
    'Capital': ['Montgomery', 'Juneau', 'Phoenix', 'Little Rock', 'Sacramento', 'Denver',
                'Hartford', 'Dover', 'Tallahassee', 'Atlanta', 'Honolulu', 'Boise',
                'Springfield', 'Indianapolis', 'Des Moines', 'Topeka', 'Frankfort', 'Baton Rouge',
                'Augusta', 'Annapolis', 'Boston', 'Lansing', 'Saint Paul',
                'Jackson', 'Jefferson City', 'Helena', 'Lincoln', 'Carson City',
                'Concord', 'Trenton', 'Santa Fe', 'Albany',
                'Raleigh', 'Bismarck', 'Columbus', 'Oklahoma City', 'Salem',
                'Harrisburg', 'Providence', 'Columbia', 'Pierre',
                'Nashville', 'Austin', 'Salt Lake City', 'Montpelier', 'Richmond', 'Olympia',
                'Charleston', 'Madison', 'Cheyenne', 'Hagåtña', 'Saipan',
                'San Juan', 'Pago Pago', 'Charlotte Amalie'],
    'Latitude': [32.361538, 58.301935, 33.448457, 34.736009, 38.555605, 39.7391667,
                 41.767, 39.161921, 30.4518, 33.76, 21.30895, 43.613739,
                 39.783250, 39.790942, 41.590939, 39.04, 38.197274, 30.45809,
                 44.323535, 38.972945, 42.2352, 42.7335, 44.95,
                 32.320, 38.572954, 46.595805, 40.809868, 39.160949,
                 43.220093, 40.221741, 35.667231, 42.659829,
                 35.771, 48.813343, 39.962245, 35.482309, 44.931109,
                 40.269789, 41.82355, 34.000, 44.367966,
                 36.165, 30.266667, 40.7547, 44.26639, 37.54, 47.042418,
                 38.349497, 43.074722, 41.145548, 13.4735, 15.1851,
                 18.4663, -14.2766, 18.3419],
    'Longitude': [-86.279118, -134.419740, -112.073844, -92.331122, -121.468926, -104.984167,
                  -72.685093, -75.526755, -84.27277, -84.39, -157.826182, -116.237651,
                  -89.650373, -86.147685, -93.620866, -95.69, -84.86311, -91.140229,
                  -69.765261, -76.490208, -71.0275, -84.5467, -93.094,
                  -90.207, -92.189283, -112.027031, -96.675345, -119.767403,
                  -71.549127, -74.756138, -105.964575, -73.781339,
                  -78.638, -100.779004, -83.000647, -97.534994, -123.029159,
                  -76.875613, -71.422132, -81.035, -100.336378,
                  -86.784, -97.75, -111.892622, -72.57194, -77.46, -122.893077,
                  -81.633294, -89.384444, -104.802042, 144.7489, 145.6748,
                  -66.1057, -170.6926, -64.9321],
    'Website': ['http://www.alabama.gov', 'http://alaska.gov', 'https://az.gov', 
                'https://portal.arkansas.gov/', 'https://www.ca.gov/', 'https://www.colorado.gov/',
                'https://portal.ct.gov/', 'https://delaware.gov/', 'http://www.myflorida.com/',
                'https://georgia.gov/', 'https://portal.ehawaii.gov/', 'https://www.idaho.gov/',
                'https://www2.illinois.gov/', 'https://www.in.gov/', 'https://www.iowa.gov/',
                'https://www.kansas.gov/', 'https://kentucky.gov/', 'https://www.louisiana.gov/',
                'https://www.maine.gov/portal/index.html', 'https://www.maryland.gov/',
                'https://www.mass.gov/', 'https://www.michigan.gov/', 'https://mn.gov/',
                'https://www.ms.gov/', 'https://www.mo.gov/', 'https://mt.gov/',
                'https://www.nebraska.gov/', 'http://nv.gov/', 'https://www.nh.gov/',
                'https://www.nj.gov/', 'https://www.newmexico.gov/', 'https://www.ny.gov/',
                'https://www.nc.gov/', 'https://www.nd.gov/', 'https://ohio.gov/',
                'https://www.oklahoma.gov/', 'https://www.oregon.gov/',
                'https://www.pa.gov/', 'http://www.ri.gov/', 'https://sc.gov/',
                'https://sd.gov/', 'https://www.tn.gov/', 'https://www.texas.gov/',
                'https://utah.gov/', 'https://www.vermont.gov/', 'https://www.virginia.gov/',
                'https://access.wa.gov/', 'https://www.wv.gov/', 'https://www.wisconsin.gov/',
                'http://www.wyo.gov/', 'https://www.guam.gov/', 'https://www.gov.mp/',
                'https://www.pr.gov/', 'https://www.americansamoa.gov/', 'https://www.vi.gov/']
}

# Generate JavaScript for adding markers
for idx, (state, capital, lat, lon, website) in enumerate(zip(data['State'], data['Capital'], data['Latitude'], data['Longitude'], data['Website'])):
    js_gen.add_code(f"  addMarker{idx}() {{")
    js_code = f"""
    const marker{idx} = L.marker([{lat}, {lon}]).addTo(this.map);
    const popupContent = '<b>{state}</b><br><a href="{website}" target="_blank">Official Website</a>';
    
    marker{idx}.on('mouseover', function() {{
      this.bindPopup(popupContent).openPopup();
    }});

    marker{idx}.on('mouseout', function() {{
      this.closePopup();
    }});
    """
    js_gen.add_code(js_code.strip())
    js_gen.add_code("  }")

# Close the class definition
js_gen.add_code("}")

# Initialize the class in JavaScript
js_gen.add_code("const usaMap = new USAMap();")

# Call addMarker methods to plot the points
for idx in range(len(data['State'])):
    js_gen.add_code(f"usaMap.addMarker{idx}();")

# Write to the JavaScript file
js_gen.write_to_file()

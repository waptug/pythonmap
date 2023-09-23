// LeafletMap class to encapsulate the map functionality
class LeafletMap {
    constructor(mapId) {
      // Initialize the map with default settings
      this.map = L.map(mapId).setView([37.7749, -122.4194], 4);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18
      }).addTo(this.map);
    }
  
    // Add a marker to the map
    addMarker(cityData) {
      const lat = parseFloat(cityData.Latitude);
      const lon = parseFloat(cityData.Longitude);
      const cityName = cityData["City Name"];
      const population = cityData.Population;
      const mayor = cityData.Mayor;
      const url = cityData.URL;
  
      const marker = L.marker([lat, lon]).addTo(this.map);
  
      // Create popup content using HTML
      const popupContent = `
        <strong>${cityName}</strong><br>
        Website:<a href="${url}" target="_blank">${url}</a><br>
        Population: ${population}<br>
        Mayor: ${mayor}
      `;
  
      marker.bindPopup(popupContent);
    }
  
    // Load JSON data and populate the map
    loadData() {
      // Fetch the JSON data from data.json
      fetch("wa-cities.json")
        .then(response => response.json())
        .then(data => {
          // Iterate through the JSON array and add markers
          data.forEach(cityData => this.addMarker(cityData));
        });
    }
  }
  
  // Initialize the LeafletMap class and load data
  const myMap = new LeafletMap('mapid');
  myMap.loadData();
  
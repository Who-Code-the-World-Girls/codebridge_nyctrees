var map = L.map('map').setView([37.8, -96], 4);

var tiles= L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom:19;
}).addTo(map);

let geojsonLayer = L.geoJSON(boroughBoundaries);
geojsonLayer.addTo(map);


var map = L.map('map').setView([30,-90], 4);

var streets = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

var nexrad = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
		opacity:  0.25
}).addTo(map);

var WeatherRadar = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_rtma_time/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
		opacity:  0.25
}).addTo(map);

var Warnings = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/wwa_meteoceanhydro_longduration_hazards_time/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
		opacity: 0.25
}).addTo(map);

//Create object with layers for each basemap
var baseMaps = {"Basemap": map};

var overlays = {
		"nexrad": nexrad,
	  "WeatherRadar": WeatherRadar,
	  "Warnings": Warnings
	};

	L.control.layers(baseMaps, overlays).addTo(map);

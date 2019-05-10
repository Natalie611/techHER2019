// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 40.7728, lng: -74.000};
    
    // points on map
    var loc = {lat: 40.7619348, lng: -73.980639};
      var loc1 = {lat: 40.7182131, lng: -74.0031608};
    var loc2 = {lat: 40.7490725, lng: -73.9935936};
    // The map, centered at Uluru
    
    
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 11, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: loc, map: map});
    var marker1 = new google.maps.Marker({position: loc1, map: map});
    var marker2 = new google.maps.Marker({position: loc2, map: map});
  }
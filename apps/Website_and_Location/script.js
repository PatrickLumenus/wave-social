// Initialize and add the map
function initMap() {
  // The location of Uluru
  
  var latit = 0;
  var longit = 0;
  
  if ("geolocation" in navigator) {
  // check if geolocation is supported/enabled on current browser
  navigator.geolocation.getCurrentPosition(
   function success(position) {
     // for when getting location is a success
     latit = position.coords.latitude;
     longit = position.coords.longitude;
     //console.log(latit);
     //console.log(longit);
       //console.log(latit);
 // console.log(longit);
  const location = { lat: latit, lng: longit};
  //console.log(location);
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: location,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
   },  
  function error(error_message) {
     // for when getting location is a success
     latit = 0;
     longit = 0;
     //console.log(latit);
     //console.log(longit);
  const location = { lat: latit, lng: longit};
  //console.log(location);
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: location,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
   });
  }
  else{
    console.log("Geolocation is not supported")
  }
}

window.initMap = initMap;
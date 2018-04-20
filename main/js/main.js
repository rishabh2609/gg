if(!navigator.geolocation) {
    alert('Not available');
}

function geo_success(position) {
  console.log(position.coords.latitude, position.coords.longitude);
}

function geo_error(err) {
  alert(err.message);
}

var geo_options = {
  enableHighAccuracy: true, 
  maximumAge        : 30000, 
  timeout           : 27000
};

var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);


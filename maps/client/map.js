Template.tasksmap.onCreated(function() {
  GoogleMaps.ready('map', function(map) {
/*
    google.maps.event.addListener(map.instance, 'click', function(event) {
      Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    });
*/
    var markers = {};

    Tasks.find().observe({
      added: function (document) {
        Session.set("loc", document.location);
        if(Session.get("loc")){
          var loc = Session.get("loc");
          loc = loc.split(",");
          var marker = new google.maps.Marker({
            draggable: false,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(loc[0], loc[1]),
            map: map.instance,
            id: document._id
          });
        }
      }
    });
  });
});

Template.tasksmap.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8
      };
    }
  }
});

Router.route("/tasksmap");

Router.onBeforeAction(function() {
  GoogleMaps.load();
  this.next();
}, { only: ['tasksmap'] });

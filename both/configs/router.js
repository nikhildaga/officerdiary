Router.configure({
  layoutTemplate: 'layout',
});

Router.route('/', function () {
  this.render('home');
});


Router.route('/cases');
Router.route('/notes');
Router.route('/people');
Router.route('/projects');
Router.route('/tasks');

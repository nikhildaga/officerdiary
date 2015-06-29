Router.configure({
 layoutTemplate: function() {
    if (Meteor.userId()) {
      return 'layout'
    } else {
      return 'guestLayout'
    }
  }
});

Router.route('/', function() {
  this.render('home');
});


Router.route('/cases');
Router.route('/notes');
Router.route('/people');
Router.route('/projects');
Router.route('/tasks');

AccountsTemplates.configureRoute('signIn');

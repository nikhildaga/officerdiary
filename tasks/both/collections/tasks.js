Tasks = new Mongo.Collection("Tasks");

Tasks.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  owner: {
    type: String,
    autoValue : function() {
      return Meteor.userId();
    }
  },
  createdAt : {
    type: Date,
    autoValue : function () {
      return new Date();
    }
  },
  assignedTo: {
    type: String,
    autoform: {
      type: 'select',
      options: function() {
        return Meteor.users.find().map(function(user) {
          return {
            value: user._id,
            label: user.emails[0].address
          }
        });
      }
    }
  },
  dueDate: {
    type: Date
  },
  complexity: {
    type: Number,
    min: 0,
    max: 100
  },
  location: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'map',
        mapType: 'hybrid',
        searchBox: true,
        geolocation: true
      }
    }
  }
}));

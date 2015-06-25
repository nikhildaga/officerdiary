People = new Mongo.Collection("People");

People.attachSchema(new SimpleSchema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  mobile: {
    type: Number
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  jobTitle: {
    type: String
  },
  company: {
    type: String
  },
  location: {
    type: String,
    autoform: {
      type: 'map',
      afFieldInput: {
        searchBox: true
      }
    }
  },
  positionData: {
    type: String,
    autoform: {
      type: 'map',
      afFieldInput: {
        searchBox: true,
        geolocation: true,
        autolocate: true
      }
    }
  },
  feedData: {
    type: String
  }
}));

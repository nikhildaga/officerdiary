People = new Mongo.Collection("People");

People.attachSchema(new SimpleSchema({
  name: {
    type: String
  }
}));

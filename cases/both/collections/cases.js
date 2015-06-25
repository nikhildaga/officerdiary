Cases = new Mongo.Collection("Cases");

Cases.attachSchema(new SimpleSchema({
  name: {
    type: String
  }
}));

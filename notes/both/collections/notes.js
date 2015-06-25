Notes = new Mongo.Collection("Notes");

Notes.attachSchema(new SimpleSchema({
  name: {
    type: String
  }
}));

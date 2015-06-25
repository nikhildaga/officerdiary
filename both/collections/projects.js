Projects = new Mongo.Collection("Projects");

Projects.attachSchema(new SimpleSchema({
  name: {
    type: String
  }
}));

Tasks = new Mongo.Collection("Tasks");

Tasks.attachSchema(new SimpleSchema({
  name: {
    type: String
  }
}));

Template.tasks.helpers({
  tasks : function () {
    return Tasks.find({}, {sort : {createdAt : -1}});
  }
});

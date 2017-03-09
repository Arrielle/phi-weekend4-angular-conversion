myApp.controller('TaskController', ['TaskFactory', function(TaskFactory){ //first task factory is a DEPENDENCY and relates to task.factory.js second one is being passed in as a 'random' perameter
  console.log('The task controller was created');
  var self = this;
  self.newTask = {};
  self.taskList = [];
  self.someThingToGoOnTheView = TaskFactory.testProperty;
  self.someRandomArray = TaskFactory.testArray;
  self.taskList = TaskFactory.allTasks;

  self.addTask = function(){
    TaskFactory.addTask(self.newTask);
  }

  self.deleteTask = function(taskId){
    TaskFactory.deleteTask(taskId);
  }

  self.completeTask = function(taskId){
    TaskFactory.completeTask(taskId);
  }
//
// self.completeTask = function(taskId){
//   $http({
//     method: 'PUT',
//     url: '/tasks/' + taskId,
//     data:
//   }).then(function(response){
//     getTasks();
//   })
// }

}]);//ends todocontroller

myApp.controller('TaskController', ['$http', 'TaskFactory', function($http, TaskFactory){ //first task factory is a DEPENDENCY and relates to task.factory.js second one is being passed in as a 'random' perameter
  console.log('The task controller was created');
  var self = this;
  self.newTask = {};
  self.taskList = [];
  self.someThingToGoOnTheView = TaskFactory.testProperty;
  self.someRandomArray = TaskFactory.testArray;
  self.taskList = TaskFactory.allTasks;



  self.addTask = function addTask() { //if I want to call it in the index, I need to add it to self
    $http({
      method: 'POST',
      url: '/tasks',
      data: self.newTask
    }).then(function(response){
      TaskFactory.updateTasks();
      self.newTask = {};
      console.log('was clicked');
    });//ends.then
  }//ends addTask function

self.deleteTask = function(taskId){
  console.log('delete button was clicked');
  $http({
    method: 'DELETE',
    url: '/tasks/' + taskId
  }).then(function(response){
    TaskFactory.updateTasks();
  });
}//ends deleteTask function


self.completeTask = function(taskId){
  console.log('complete button was clicked');
  $http({
    method: 'PUT',
    url: '/tasks/' + taskId
  }).then(function(response){
    TaskFactory.updateTasks();
  });
}//ends deleteTask function
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

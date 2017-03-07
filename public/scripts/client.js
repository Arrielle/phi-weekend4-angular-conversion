var myApp = angular.module('TaskApp', []);

myApp.controller('TaskController', ['$http', function($http){
  console.log('The task controller was created');
  var self = this;
  self.newTask = {};
  self.taskList = [];

  getTasks();

  function getTasks() {
    $http({ //this is like our AJAX call
      method: 'GET',
      url: '/tasks'
    }).then(function(response){
      console.log(response.data); //here is our array of objects
      self.taskList = response.data;
    });//ends .then
  } //ends getTasks function

  self.addTask = function addTask() { //if I want to call it in the index, I need to add it to self
    $http({
      method: 'POST',
      url: '/tasks',
      data: self.newTask
    }).then(function(response){
      getTasks();
      self.newTask = {};
      console.log('was clicked');
    });//ends.then
  }//ends addTask function
}]);//ends todocontroller

myApp.factory('TaskFactory', ['$http', function($http){

var self = this;
var testArrayVar = ['queso', 'bagel', 'donald bagel', 'cheeeeese', 'bread', 'caroline'];
testArrayVar.pop();

var factoryTasks = { list:[] }; //object with property list with key of an empty array that will be replaced by the data that we get back from the ajax request.
getTasks();

function addTask(newTask) { //if I want to call it in the index, I need to add it to self
  $http({
    method: 'POST',
    url: '/tasks',
    data: newTask
  }).then(function(response){
    getTasks();
    console.log('was clicked');
  });//ends.then
}//ends addTask function

function getTasks() {
  $http({ //this is like our AJAX call
    method: 'GET',
    url: '/tasks'
  }).then(function(response){
    console.log(response.data); //here is our array of objects
    factoryTasks.list = response.data; //variable factoryTasks and the property you want
  });//ends .then
} //ends getTasks function

function completeTask(taskId){
  console.log('complete button was clicked');
  $http({
    method: 'PUT',
    url: '/tasks/' + taskId
  }).then(function(response){
    getTasks();
  });
}//ends completeTask function

function deleteTask(taskId){
  console.log('delete button was clicked');
  $http({
    method: 'DELETE',
    url: '/tasks/' + taskId
  }).then(function(response){
    getTasks();
  });
}//ends deleteTask function

  return {
    testProperty: 'taco',
    testArray: testArrayVar,
    allTasks: factoryTasks,
    updateTasks: getTasks,
    completeTask: completeTask,
    deleteTask: deleteTask,
    addTask: addTask
  };//return is like module.exports. Stuff inside gets passed back.
}]);//return is how other things access this information made public to everything in the application


//CONTROLLER is dependant on the factory
//where is it returning to?

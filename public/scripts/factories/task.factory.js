myApp.factory('TaskFactory', ['$http', function($http){

var testArrayVar = ['queso', 'bagel', 'donald bagel', 'cheeeeese', 'bread', 'caroline'];
testArrayVar.pop();

var factoryTasks = { list:[] }; //object with property list with key of an empty array that will be replaced by the data that we get back from the ajax request.
getTasks();

function getTasks() {
  $http({ //this is like our AJAX call
    method: 'GET',
    url: '/tasks'
  }).then(function(response){
    console.log(response.data); //here is our array of objects
    factoryTasks.list = response.data; //variable factoryTasks and the property you want
  });//ends .then
} //ends getTasks function

  return {
    testProperty: 'taco',
    testArray: testArrayVar,
    allTasks: factoryTasks,
    updateTasks: getTasks
  };//return is like module.exports. Stuff inside gets passed back.
}]);//return is how other things access this information made public to everything in the application


//CONTROLLER is dependant on the factory
//where is it returning to?

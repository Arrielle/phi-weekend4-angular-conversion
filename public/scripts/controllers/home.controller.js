myApp.controller('HomeController', ['TaskFactory', function(TaskFactory){
  console.log('Home controller was loaded');
  var self = this;
  self.specialMessage = 'This site is amazing!';
  self.someThingToGoOnTheView = TaskFactory.testProperty;
  self.someRandomArray = TaskFactory.testArray;
}]);

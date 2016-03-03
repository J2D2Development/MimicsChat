var app = angular.module('BlankApp', ['ngMaterial']);

app.controller('MainController', function($scope) {
  console.log('main controller loaded');
});

app.controller('ChatController', function($scope) {
  var imagePath = 'https://material.angularjs.org/latest/img/list/60.jpeg?0';
  $scope.messages = [{
    face : imagePath,
    what: 'Contact backend',
    who: 'Joe Driscoll',
    when: '3:08PM',
    notes: " Need help with getting the product to display properly"
  }, {
    face : 'https://material.angularjs.org/latest/img/100-0.jpeg',
    what: 'Brunch this weekend?',
    who: 'Min Li Chan',
    when: '3:08PM',
    notes: " I'll be in your neighborhood doing errands"
  }, {
    face : 'https://material.angularjs.org/latest/img/100-1.jpeg',
    what: 'Brunch this weekend?',
    who: 'Min Li Chan',
    when: '3:08PM',
    notes: " I'll be in your neighborhood doing errands"
  }, {
    face : imagePath,
    what: 'Brunch this weekend?',
    who: 'Min Li Chan',
    when: '3:08PM',
    notes: " I'll be in your neighborhood doing errands"
  }, {
    face : 'https://material.angularjs.org/latest/img/100-2.jpeg',
    what: 'Brunch this weekend?',
    who: 'Min Li Chan',
    when: '3:08PM',
    notes: " I'll be in your neighborhood doing errands"
  }];
});
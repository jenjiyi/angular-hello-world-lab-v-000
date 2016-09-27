function MainController($scope) {
  $scope.name = "Melvin";
  $scope.email = "potato@head.com";
  $scope.phone = "252-525-2525";
}
angular
  .module('app')
  .controller('MainController', MainController);

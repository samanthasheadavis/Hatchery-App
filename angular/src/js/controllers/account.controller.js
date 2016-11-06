angular.module('hatcheryApp').controller('AccountController', function($scope, accountService, $state) {
  console.log('testing');

  $scope.loggedIn = {};

    $scope.checkLogin = function(username) {
      accountService.get(username, function(response) {
        console.log(response);
        $scope.loggedIn = response.data;
        console.log($scope.loggedIn);
      });

    };

    $scope.processForm = function(username, email, password) {
        $scope.formData = {
            username: username,
            email: email,
            password: password
        };
        accountService.set($scope.formData);

        $state.reload();
    };

});

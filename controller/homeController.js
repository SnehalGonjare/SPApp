myApp.controller("homeCtrl", function ($scope,$state) {
    $scope.verifyUserLogin = function () {
        if ($scope.username == "sadmin" && $scope.password == "sadmin") {
            $state.go('landing');
         } else {
            alert('Invalid Credentials');
        }

    }
});

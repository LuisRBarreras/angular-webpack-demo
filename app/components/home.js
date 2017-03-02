export default ngModule => {
     if (ON_TEST) {
        require('./home.test').default(ngModule);
    }

    ngModule.controller('homeCtrl',['$scope', 'jokesService', function($scope, jokesService) {
        $scope.gretting = 'Controller saying hello';

        jokesService.get().then(function(jokes) {
            $scope.jokes = jokes;
        });
    }]);
};

export default ngModule => {
     if (ON_TEST) {
        require('./home.test').default(ngModule);
    }

    ngModule.controller('homeCtrl',['$scope', function($scope) {
        $scope.gretting = 'Controller saying hello';
    }]);
};
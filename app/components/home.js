
export default ngModule => {
    ngModule.controller('homeCtrl',['$scope', function($scope) {
        $scope.gretting = 'Nice';
    }]);
};
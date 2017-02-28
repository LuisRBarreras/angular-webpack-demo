export default ngModule => {
    describe('hello-ctrl', () => {
        var $scope, $controller;
        beforeEach(window.module(ngModule.name));
        
        beforeEach(inject(function(_$controller_) {
            $controller = _$controller_;
            $scope = {};
            $controller = $controller('homeCtrl', {$scope});
        }));
        it('$scope.gretting', function() {
            expect($scope.gretting).to.be.equal('Controller saying hello');
        });
    });
}
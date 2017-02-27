export default ngModule => {
    describe('nav-bar', () => {
        var $compile,
            $rootScope;

        beforeEach(window.module(ngModule.name));
        beforeEach(inject(function(_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        it('Expect navbar be horizontal', () => {
            var orientation = "horizontal";
            var element = $compile(`<div my-nav-bar orientation="${orientation}"></div>`)($rootScope);

            // fire all the watches, so the expressions will be evaluated
            $rootScope.$digest();
    
            expect(element.html()).contain('<ul class="nav nav-pills ">');
        });

        it('Expect navbar be vertical', () => {
            var orientation = "vertical";
            var element = $compile(`<div my-nav-bar orientation="${orientation}"></div>`)($rootScope);

            // fire all the watches, so the expressions will be evaluated
            $rootScope.$digest();
    
            expect(element.html()).contain('<ul class="nav nav-pills nav-stacked">');
        });
    });
};
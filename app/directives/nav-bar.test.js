export default ngModule => {
    describe('nav-bar', () => {
        beforeEach(window.module(ngModule.name));

        it('should test properly', () => {
            expect(true).to.be.true;
        });
    });
};
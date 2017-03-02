var sinon  = require('sinon');
require('sinon-as-promised');

export default ngModule => {
    describe('jokesServices', () => {
        var $http;
        beforeEach(window.module(ngModule.name));
        beforeEach(inject(function(_$http_) {
            $http = sinon.stub().resolves([]);
            
        }));

        it('jokesServices', function() {
           
        });
    });
};
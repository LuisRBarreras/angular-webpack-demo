export default ngModule => {
    if (ON_TEST) {
        require('./services.test.js');
    }
    
    ngModule.factory('jokesService', function($http) {
        return {
            get: () => $http.get('http://api.icndb.com/jokes/').then((result) => {
                var random = Math.floor(Math.random() * (100 - 0) + 0);  
                var size = 10;          
                return result.data.value.slice(random, random + size);
            })
        }
    });
};
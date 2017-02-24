export default ngModule => {
    ngModule.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            var homeState = {
                name: 'home',
                url: '/home',
                template: require('./components/home.html'),
                controller: 'homeCtrl',
            };

            var aboutState = {
                name: 'about',
                url: '/about',
                template: '<h3> Its the UI-Router hello world app!</h3>'
            };

            $stateProvider.state(homeState);
            $stateProvider.state(aboutState);
            $urlRouterProvider.otherwise('/home');
        }
    ]);
};

import angular from 'angular';
import registerDirectives from './directives';
import registerComponents from './components';

import uirouter from 'angular-ui-router';

if (ON_TEST) {
    require('angular-mocks/angular-mocks');
}

const ngModule = angular.module('app', [uirouter]);



ngModule.config(function ($stateProvider, $urlRouterProvider) {
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
});

registerComponents(ngModule);
registerDirectives(ngModule);
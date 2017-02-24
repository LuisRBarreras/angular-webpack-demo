import angular from 'angular';
import registerDirectives from './directives';
import registerComponents from './components';
import routes from './routes.js';

import uirouter from 'angular-ui-router';

if (ON_TEST) {
    require('angular-mocks/angular-mocks');
}

const ngModule = angular.module('app', [uirouter]);

registerComponents(ngModule);
registerDirectives(ngModule);
routes(ngModule);
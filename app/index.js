var angular = require('angular');
const _ = require('underscore');
var ngModule = angular.module('app', []);


ngModule.directive("myNavBar", function() {
    var config = {
        elements: [
            { name: "Home", type: "link", href: "http://www.google.com", active: true },
            { name: "Profile", type: "link", href: "http://www.iamluisbarreras.com" },
        ]   
    };
    var template =  require('./nav-bar.html')
        .replace(':mainContent', _.map(config.elements, generateNavbarElement).join('\n'));

    function controller($scope, $element, $attrs, $transclude) {
        $scope.orientationStyle = ($scope.orientation === "vertical") ? "nav-stacked" : "";
    }

    function generateNavbarElement (elementConfig) {
        var template = '<li role="presentation" class=":class">:content </li>';
        if (elementConfig.type === 'link') {
            var linkTemplate = '<a href=":href">:name</a></li>'
                .replace(':href', elementConfig.href)
                .replace(':name', elementConfig.name);
                
            template = template.replace(':content', linkTemplate);
                
        }
        
        template = template.replace(':class', (elementConfig.active) ? 'active' : '');
        return template;
    }

    return {
        restrict: 'EA',
        template: template,
        scope: {
            orientation: '@'
        },
        controller: controller
    };
});
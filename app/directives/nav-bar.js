import _ from 'underscore';

export default ngModule => {
    if (ON_TEST) {
        require('./nav-bar.test').default(ngModule);
    }

    ngModule.directive("myNavBar", () => {
        require('./nav-bar.less');

        var config = {
            elements: [
                { name: "Home", type: "link", url: "home" },
                { name: "About", type: "link", url: "about" },
            ]   
        };
        var template = require('./nav-bar.html')
            .replace(':mainContent', _.map(config.elements, generateNavbarElement).join(""));

        return {
            restrict: 'EA',
            template: template,
            controller: controller,
            scope: {
                orientation: '@'
            },
            transclude: true
        };
    });
};


function controller($scope, $element, $attrs, $transclude) {
    $scope.orientationStyle = ($scope.orientation === "vertical") ? "nav-stacked" : "";
}

function generateNavbarElement (elementConfig) {
    var template = `<li role="presentation" ui-sref-active="active">:content   </li>`;
    if (elementConfig.type === 'link') {
        var linkTemplate = `<a ui-sref="${elementConfig.url}" >${elementConfig.name}</a>`;
        template = template.replace(':content', linkTemplate);
    }
    
    template = template.replace(':class', (elementConfig.active) ? 'active' : '');
    return template;
}
var partyZone = angular.module('partyZone', ['ui.router']);

partyZone.controller('partyZoneController', ['$scope', function($scope){
    $scope.title = 'test';

    var total = 5;
}]);

partyZone.component('zoneOverview', {
    templateUrl: 'templates/overview.html',
    bindings: {
        name: "<"
    },
    controller: function() {
        console.log(this.name)
    }
});

partyZone.component('zonesAll', {
    template: 'test',
    bindings: {
        name: "<"
    },
    controller: function(){
        console.log(this.name)
    }
});

partyZone.component('zoneSettings', {
    template: 'settings',
    bindings: {
        name: "<"
    },
    controller: function(){
        console.log(this.name)
    }
});
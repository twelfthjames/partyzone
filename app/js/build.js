var partyZone = angular.module('partyZone', []);

partyZone.controller('partyZoneController', ['$scope', function($scope) {
    $scope.city = 'richmond';
}]);

partyZone.component('zoneOverview', {
    templateUrl: 'templates/overview.html',
    bindings: {
        name: "<"
    },
    controller: 'zoneOverview'
});

partyZone.controller('zoneOverview', ['$scope', function($scope){
    $scope.total = "1";
}]);


partyZone.component('zonesAll', {
    templateUrl: 'templates/zones.html',
    bindings: {
        name: "<"
    },
    controller: 'allZones'
});

partyZone.controller('allZones', ['$scope', function($scope) {
    $scope.zones = [
        {sponsored: 'false', name: 'PZ Launch Party', venue: 'Kabana Rooftop Lounge', date: new Date('02/01/2018'), count: '15'}
    ];

    
    $scope.noPast = 'Once you complete your first PZ, you\'ll be able to get a recap here!';

    // Create Zone Functionality
    $scope.createZone = function($scope, $mdDialog){
       
    };
    
    // Count Me In Functionality
    $scope.countIn = "Count Me In!";
    
    $scope.rsvpClick = function(){
        this.countIn = "See You There!";
        $scope.isDisabled = true;
    };


}]);


partyZone.component('zoneSettings', {
    template: 'settings',
    bindings: {
        name: "<"
    },
    controller: 'zoneSettings'
});

partyZone.controller('zoneSettings', ['$scope', function($scope) {

}]);
function newFunction($scope) {
    $scope.zones.count = '5';
}

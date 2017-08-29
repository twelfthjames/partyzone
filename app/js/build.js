var partyZone = angular.module('partyZone', []);

partyZone.controller('partyZoneController', ['$scope', function($scope) {
    $scope.city = 'Richmond';
}]);

partyZone.component('zoneOverview', {
    templateUrl: 'templates/overview.html',
    bindings: {
        name: "<"
    },
    controller: 'zoneOverview'
});

partyZone.controller('zoneOverview', ['$scope', function($scope){
    $scope.total = "2";
}]);


// function zoneOverview($scope){
//     $scope.title = 'test';
//     $scope.total = 5;
// }



partyZone.component('zonesAll', {
    templateUrl: 'templates/zones.html',
    bindings: {
        name: "<"
    },
    controller: 'allZones'
});

partyZone.controller('allZones', ['$scope', function($scope) {
    $scope.test = 'test';
    $scope.zones = [
        {name: 'The Friend Zone', venue: 'The Veil Brewing Co.', date: new Date('09/07/2017')},
        {name: 'PZ Launch Party', venue: 'Kabana Rooftop Lounge', date: new Date('02/01/2018')}
    ];

    $scope.past = [
      {name: 'Past Zone 1'}  
    ];
    $scope.noPast = 'Once you complete your first PZ, you\'ll be able to get a recap here!';
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
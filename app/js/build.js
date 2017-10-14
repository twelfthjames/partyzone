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
        {sponsored: 'false', name: 'PZ Launch Party', venue: 'Kabana Rooftop Lounge', date: new Date('02/01/2018'), count: '15'},
        {sponsored: 'false', name: 'Halloween Celebration', venue: 'Twelfth & James Studios', date: new Date('10/31/2017'), count: '2'}
    ];

    $scope.past = [
    //   {name: 'Past Zone 1'}  
    ];
    $scope.noPast = 'Once you complete your first PZ, you\'ll be able to get a recap here!';

    $scope.countIn = "Count Me In!";
    
    $scope.rsvpClick = function($rsvp){
        $rsvp.countIn = "See ya there.";
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
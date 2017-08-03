var partyZone = angular.module('partyZone', []);

partyZone.controller('partyZoneController', function partyZoneController(){
   
});

partyZone.component('zoneOverview', {
    templateUrl: 'templates/overview.html',
    bindings: {
        name: "<"
    },
    controller: function() {
        console.log(this.name)
    }
});
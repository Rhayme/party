var module = angular.module('partyApp');

module.service('createService', function($http){
    this.addParty = function(party){
        return $http({
            method: 'POST',
            url: '/api/party',
            data: party
        });

    }



})

var module = angular.module('partyApp');

module.service('partyService', function($http){
    this.addParty = function(party){
        return $http({
            method: 'POST',
            url: '/api/party',
            data: party
        });

    }

    this.getParty = function(party_id){
        return $http({
            method: 'GET',
            url: '/api/party/' + party_id
           
        });
        

    }



})

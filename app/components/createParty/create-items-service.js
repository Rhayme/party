var morule = angular.module('partyApp');
module.service('itemService', function($http){
    const url = '/api/items'
    this.addItems = function(party_id, items){
        items.party_id = party_id;
        return $http({
            method: 'POST',
            url: url,
            data: items
        })
    }
    this.getItem = function(){
        return $http({
            method: 'GET',
            url: url
        }).then(function(response){
            return response.data;
        });
    }

    this.getItems = function(party_id){
        return $http({
            method: 'GET',
            url: '/api/party/' + party_id + '/items'
        }).then(function(response){
            return response.data;
        });
    }
});
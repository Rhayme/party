var module = angular.module('partyApp');

module.controller('createController', function($scope, partyService, $state){

    $scope.addParty = function(party){
        console.log(11111111, party)
        partyService.addParty(party).then(function(response){
            $state.go('create-party.items', {
                party_id: response.data[0].id
            })
            console.log(response);
        });
    }  
    
    


});
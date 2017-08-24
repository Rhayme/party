var module = angular.module('partyApp');

module.controller('editController', function($scope, partyService, $stateParams){

    //console.log($stateParams.party_id);
 
        partyService.getParty($stateParams.party_id).then(function(response){
            $scope.party = response.data[0];
            console.log( response.data[0]);
        });
     
    
    


});
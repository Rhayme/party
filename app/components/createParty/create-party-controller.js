var module = angular.module('partyApp');

module.controller('createController', function($scope, createService){

    $scope.addParty = function(party){
        console.log(11111111, party)
        createService.addParty(party).then(function(response){
            console.log(response);
        })
    }    


});
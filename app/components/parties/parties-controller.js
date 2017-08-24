var module = angular.module('partyApp');

module.controller('partiesController', function($scope, partiesService){
    getParties();

    function getParties(){
        partiesService.getParties().then(function(response){
          
            $scope.parties = response;
        });

    }
})
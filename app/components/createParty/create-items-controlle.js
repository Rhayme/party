var module = angular.module('partyApp');

module.controller('itemController', function($scope, itemService, $stateParams){
    var party_id = $stateParams.party_id;
        $scope.addItems = function(item){
        console.log(1111111, item);
        itemService.addItems(party_id, item).then(function(response){
          $scope.items.unshift(response.data[0]);
            console.log(response);

        });
    }

    getItem();
    function getItem(){
       itemService.getItems(party_id).then(function(data){
           console.log(data);
        $scope.items = data;
               }) 
       
      
    }
    
})
var module = angular.module('partyApp');

module.service('partiesService', function($http){

     this.getParties = function(){
         var url = '/api/party'
       

         return $http({
             mothod:'GET',
             url: url
         }).then(function(response){
            return response.data;
         });

     }

});
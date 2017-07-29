var module = angular.module('partyApp', ['ngRoute']);

module.config(function($routeProvider){
$routeProvider
.when('/home', {
    templateUrl: 'app/components/parties/party.html'
})
.when('/parties', {
    templateUrl: 'app/components/parties/party.html'
})
.when('/create-party', {
    template: '<create-party></create-party>'
})

.when('/contact', {
    templateUrl: 'app/components/contact/contact.html'
})

.otherwise({
    redirecTo: '/home'
});
    

})
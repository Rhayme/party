var module = angular.module('partyApp', ['ngAnimate','ui.router']);

module.config(function($stateProvider, $urlRouterProvider){
$stateProvider
.state('/', {
    url: '/home',
    template:'<h1>Home</h1>'
})
.state('parties', {
    url: '/parties',
    template:'<parties-component/>'
        
})
.state('create-party', {
    url: '/create-party',
    template:'<create-party/>'
})
.state('create-party.create', {
    url: '/create',
    templateUrl:'/app/components/createParty/p-create.html',
    controller: 'createController'
})
.state('create-party.items', {
    url: '/:party_id/items',
    templateUrl:'/app/components/createParty/party-items.html',
    controller: 'itemController'
})
.state('create-party.thanks', {
    url: '/thanks',
    templateUrl:'/app/components/createParty/party-thank.html'
})
.state('create-party.edit',{
    url: '/edit/:party_id',
    templateUrl: '/app/components/createParty/party-edit.html',
    controller: 'editController'

})
.state('contact', {
    url: '/contact',
    templateUrl:'app/components/contact/contact.html'
})

$urlRouterProvider.otherwise('/home');

});


// module.config(function($routeProvider){
// $routeProvider
// .when('/home', {
//     templateUrl: 'app/components/parties/party.html'
// })
// .when('/parties', {
//     template: '<parties-component></parties-component>'
// })
// .when('/create-party', {
//     template: '<create-party></create-party>'
// })

// .when('/contact', {
//     templateUrl: 'app/components/contact/contact.html'
// })

// .otherwise({
//     redirecTo: '/home'
// });
    

// })
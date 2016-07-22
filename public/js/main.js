
// public/js/main.js

angular.module('appContato', ['ngRoute', 'ngResource']).config(function($routeProvider, $httpProvider) {
    
    
    $httpProvider.interceptors.push('meuInterceptor');
    

    //retorna a listagem de todos os contatos...
    $routeProvider.when('/contatos', {

        templateUrl: 'partials/contatos.html',

	controller: 'ContatosController'

    });
                
             

    //retorna o formulario de contato preenchido...
    $routeProvider.when('/contato/:contatoId', {

        templateUrl: 'partials/contato.html',

	controller: 'ContatoController'

    });


    //retorna o formulario de contato vazio...
    $routeProvider.when('/contato', {

        templateUrl: 'partials/contato.html',

	controller: 'ContatoController'

    });
    
    
    $routeProvider.when('/auth', {

        templateUrl: 'partials/auth.html'

    });


    //chama a rota padrao...
    $routeProvider.otherwise({redirectTo: '/contatos'});


});


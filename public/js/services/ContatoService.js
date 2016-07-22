
// public/js/services/ContatoService.js

angular.module('appContato').factory('ContatoService', function($resource) {
    
    return $resource('/contatos/:id');    
    
});
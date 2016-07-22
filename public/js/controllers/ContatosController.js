
// public/js/controllers/ContatosController.js

//angular.module('appContatooh').controller('ContatosController', function($scope, $http) {

//modulo $resource - específico para consumir REST Endpoints...
angular.module('appContato').controller('ContatosController', function($scope, ContatoService) {


    $scope.contatos = [];

    $scope.filtro = '';

    $scope.mensagem = {texto : ''};

    //var ContatoResource = $resource('/contatos/:id');


    $scope.init = function() {

        buscaContatos();

    };


    $scope.init();


    //------------------------------


    function buscaContatos() {

        ContatoService.query(

            function(contatos) {

                $scope.contatos = contatos;
				
            },

            function(erro) {

                $scope.mensagem = {texto: 'Não foi possível obter a lista'};

		console.log("Não foi possível obter a lista de contatos");

		console.log(erro);

            }

        );

    };


    $scope.remove = function(contato) {

        ContatoService.delete(

            {id: contato._id},

            buscaContatos,

            function(erro) {

                $scope.mensagem = {texto: 'Não foi possível remover o contato'};

		console.log('Não foi possível remover o contato');

		console.log(erro);

            }

	);

    };




});



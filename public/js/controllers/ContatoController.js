
// public/js/controllers/ContatoController.js

angular.module('appContato').controller('ContatoController', 
    function($scope, $routeParams, $location, ContatoService) {


    // aqui continua no plural, é a rota no lado do servidor
    //var ContatoResource = $resource('/contatos/:id');	

    //$scope.contato = new Contato();	


    if($routeParams.contatoId) {
        
        console.log('contato existente...' + $routeParams.contatoId);

        ContatoService.get(
                
            //data in...    
            {id: $routeParams.contatoId},

            //callback success...
            function(contato) {

                $scope.contato = contato;

            },

            //callback error...
            function(erro) {

                $scope.mensagem = {texto: 'Falha ao tentar buscar o contato: ' + erro};

            }
                    
        );

    } else {
        
        console.log('contato novo...');

        $scope.contato = new ContatoService();
        
        console.log('conteudo do contato novo: ' + $scope.contato);
    }


    //-----------------------------

    $scope.salva = function() {

        console.log('salvar contato...' + $scope.contato);

        $scope.contato.$save()

            .then(function() {

                $scope.mensagem = {texto: 'Salvo com sucesso'};

                // limpa o formulário
                $scope.contato = new ContatoService();

            })

            .catch(function(erro) {
                
                console.log('Não foi possível salvar: ' + erro);

                $scope.mensagem = {texto: 'Não foi possível salvar: ' + erro};

            });
            
            //$location.path('/contatos');

    };
    
    
    //-----------------------------
    
    ContatoService.query(function(contatos) {

        $scope.contatos = contatos;

    });


});




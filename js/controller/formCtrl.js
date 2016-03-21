myApp.controller('FormCtrl', function($scope) {

    $scope.indexContato = -1;

    $scope.clicouEditar = false;

    $scope.tipo = 'Cadastrar';

    $scope.list = [
        {
            nameContato   : "Edirlei Pizatto",
            emailContato : "edirleipizatto@ciss.com.br",
            phoneContato : "(46)8822-8153"
        },      
    ];
    
    $scope.cadastraContato = function() {
        if (this.validaGravacao()) {
            $scope.list.push({
                nameContato   : $scope.contato.nameContato,
                emailContato  : $scope.contato.emailContato,
                phoneContato  : $scope.contato.phoneContato
            });     
            $scope.contato.nameContato = undefined;
            $scope.contato.emailContato = undefined;    
            $scope.contato.phoneContato = undefined;      
        }       
    };
    
    $scope.validaGravacao = function(){
        if(!$scope.contato.nameContato) {
            alert('Informe o nome do contato')
            return false;
        } else {
            if(!$scope.contato.emailContato) {
                alert('Informe o email do contato')
                return false;
            } else {
                if(!$scope.contato.phoneContato) {
                    alert('Informe o telefone do contato')
                    return false;
                }
            }
        }
        return true;
    }

    //função para editar um Contato
    $scope.editaContato = function(dataIndex) {
        $scope.clicouEditar = true;
        $scope.indexContato = dataIndex;
        $scope.nameContato = $scope.list[dataIndex].nameContato;
        $scope.contato = [];
        $scope.contato.nameContato = $scope.list[dataIndex].nameContato;
        $scope.contato.emailContato = $scope.list[dataIndex].emailContato;  
        $scope.contato.phoneContato = $scope.list[dataIndex].phoneContato;  

        $scope.tipo = 'Editar';
    };

    //função para deletar um contato
    $scope.deletaContato = function(dataIndex) {
        if ($scope.indexContato == dataIndex) {
            $scope.cancelarEdicao();  
        };       
        $scope.list.splice(dataIndex, 1); 
    };

    //função para cancelar edição
    $scope.cancelarEdicao = function() {             
        
        $scope.clicouEditar = false;
        $scope.indexContato = -1;
        $scope.contato.nameContato = undefined;
        $scope.contato.emailContato = undefined;    
        $scope.contato.phoneContato = undefined;    
        $scope.tipo = 'Cadastrar';
        
    };

    //função para salvar contato
    $scope.salvarContato = function() {

        if (this.validaGravacao()) {
        
            var editObj = {};
            editObj = {
                nameContato   : $scope.contato.nameContato,
                emailContato  : $scope.contato.emailContato,
                phoneContato  : $scope.contato.phoneContato
            };
            $scope.list[$scope.indexContato] = editObj;

            $scope.contato.nameContato = undefined;
            $scope.contato.emailContato = undefined;    
            $scope.contato.phoneContato = undefined;

            $scope.clicouEditar = false;

            $scope.tipo = 'Cadastrar';
        }
    };

});


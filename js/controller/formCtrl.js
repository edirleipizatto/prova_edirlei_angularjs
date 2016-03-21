myApp.controller('FormCtrl', function($scope) {

    $scope.indexContato = 0;

    $scope.clicouEditar = false;

    $scope.tipo = 'Cadastrar';

    $scope.list = [
        {
            nameContato   : "Edirlei Pizatto",
            emailContato : "edirleipizatto@ciss.com.br",
            phoneContato : "(46)8822-8153"
        },      
    ];
    
    $scope.cadastraContato = function(contato) {
        var isOK = true;
        if(!contato.nameContato) {
            alert('Informe o nome do contato')
            isOK =  false;
        } else {
            if(!contato.emailContato) {
                alert('Informe o email do contato')
                isOK =  false;
            } else {
                if(!contato.phoneContato) {
                    alert('Informe o telefone do contato')
                    isOK =  false;
                }
            }
        }
        if (isOK)  {
            $scope.list.push({
                nameContato   : contato.nameContato,
                emailContato  : contato.emailContato,
                phoneContato  : contato.phoneContato
            });     
            $scope.contato.nameContato = undefined;
            $scope.contato.emailContato = undefined;    
            $scope.contato.phoneContato = undefined;    
        }       
    };
    
    //função para editar um Contato
    $scope.editaContato = function(dataIndex) {
        $scope.clicouEditar = true;
        $scope.indexContato = dataIndex;
        $scope.contato.nameContato = $scope.list[dataIndex].nameContato;
        $scope.contato.emailContato = $scope.list[dataIndex].emailContato;  
        $scope.contato.phoneContato = $scope.list[dataIndex].phoneContato;  

        $scope.tipo = 'Editar';
    };

    //função para deletar um contato
    $scope.deletaContato = function(dataIndex) {

        if ($scope.indexContato > 0) {
            $scope.cancelarRenomear();  
        };       
        $scope.list.splice(dataIndex, 1); 

    };

    //função para cancelar edição
    $scope.cancelarEdicao = function() {             
        
        $scope.clicouEditar = false;
        $scope.indexContato = 0;

        $scope.contato.nameContato = undefined;
        $scope.contato.emailContato = undefined;    
        $scope.contato.phoneContato = undefined;    
        $scope.tipo = 'Cadastrar';
        
    };

    //função para renomear uma tarefa
    $scope.salvarContato = function(contato) {
        var editObj = {};
        editObj = {
            nameContato   : contato.nameContato,
            emailContato  : contato.emailContato,
            phoneContato  : contato.phoneContato
        };
        $scope.list[$scope.indexContato] = editObj;

        $scope.contato.nameContato = undefined;
        $scope.contato.emailContato = undefined;    
        $scope.contato.phoneContato = undefined;

        $scope.clicouEditar = false;

        $scope.tipo = 'Cadastrar';
    };


});


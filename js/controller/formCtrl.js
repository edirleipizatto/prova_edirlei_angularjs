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
	
	//função para cadastrar um novo contato 
	$scope.cadastraContato = function(nameContato,emailContato,phoneContato) {
		var isOK = true;
		if(!nameContato) {
			alert('Informe o nome do contato')
			isOK =  false;
		} else {
			if(!emailContato) {
				alert('Informe o email do contato')
				isOK =  false;
			} else {
				if(!phoneContato) {
					alert('Informe o telefone do contato')
					isOK =  false;
				}
			}
		}
		if (isOK)  {
			$scope.list.push({
				nameContato   : nameContato,
				emailContato  : emailContato,
				phoneContato  : phoneContato
			});		
			$scope.nameContato = undefined;
			$scope.emailContato = undefined;	
			$scope.phoneContato = undefined;	
		}		
	};

	//função para editar um Contato
	$scope.editaContato = function(dataIndex) {
		$scope.clicouEditar = true;
		$scope.indexContato = dataIndex;
		$scope.nameContato = $scope.list[dataIndex].nameContato;
		$scope.emailContato = $scope.list[dataIndex].emailContato;	
		$scope.phoneContato = $scope.list[dataIndex].phoneContato;	

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

		$scope.nameContato = undefined;
		$scope.emailContato = undefined;	
		$scope.phoneContato = undefined;	
		$scope.tipo = 'Cadastrar';
		
	};

	//função para renomear uma tarefa
	$scope.salvarContato = function(nameContato,emailContato,phoneContato) {
		var editObj = {};
		editObj = {
			nameContato   : nameContato,
			emailContato  : emailContato,
			phoneContato  : phoneContato
		};
		$scope.list[$scope.indexContato] = editObj;

		$scope.nameContato = undefined;
		$scope.emailContato = undefined;	
		$scope.phoneContato = undefined;

		$scope.clicouEditar = false;

		$scope.tipo = 'Cadastrar';
	};


});


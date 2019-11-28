function carregarDadoscidade() {
	// pegar a lista de estados do storage
	
	let listaEstadosStr = localStorage.getItem('listaEstado');
	let listaEstados = [];
	
	if (listaEstadosStr != null) {
		listaEstados = JSON.parse(listaEstadosStr);
	}

	let comboEstado = document.getElementById("comboEstado");
	let option;

	for (let index = 0; index < listaEstados.length; index++) {
		option = document.createElement("option");
		option.text = listaEstados[index].nome;
		option.value - listaEstados[index].nome;
		comboEstado.add(option);
	}
}

//construtor para Estado
function Cidade(nome, estado){
	this.nome = nome;
	this.estado = estado;
}

function salvarCidade(){
	//Pegar o elemento HTML com id "nome" e guardar em input
	let input = document.getElementById('nome_cidade');
	//Pegar o valor de dentro do input , ou seja, o que o usario digitou
	// e guardar em nome (varial)
	let nome = input.value;
	// Salvar o nome digitado no storage com chave 'nome'
	
	let select = document.getElementById('comboEstado');
	let estado = select.value;
	
	let cidade = new Cidade(nome, estado);

	//pega o item do local Storage

	let cidadeStr = localStorage.getItem('listaCidade');
	listaCidade = [];

	// Verificar se a string no local storage não é null

	if(cidadeStr != null){
		listaCidade = JSON.parse(cidadeStr);
	}

	listaCidade.push(cidade)
	
	let listaCidadeStr = JSON.stringify(listaCidade);
	localStorage.setItem('listaCidade', listaCidadeStr);

	alert('Cidade salva com sucesso');
	document.location.reload(true);

	//A linha abaixo seria inserida se quiséssemos fazer com que o sistema retornasse à página do Index após salvar a cidade.
	//abrirPagina('../index.html');

}
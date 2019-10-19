function carregarDados() {

	const pais = 'Brasil'
	document.getElementById('nome_pais').value = pais;
}

//construtor para Estado
function Estado(nome, pais) {
	this.nome = nome;
	this.pais = pais;
}

function salvarEstado() {
	//Pegar o elemento HTML com id "nome" e guardar em input
	let input = document.getElementById('nome_estado');
	//Pegar o valor de dentro do input , ou seja, o que o usario digitou
	// e guardar em nome (varial)
	let nome = input.value;
	// Salvar o nome digitado no storage com chave 'nome'
	//Traz da página o nome do país
	input = document.getElementById('nome_pais')
	let pais = input.value;
	//usa o construtor Estado para criar o objeto estado
	let estado = new Estado(nome, pais);
	// pega o item do local storage
	let listEstadoStr = localStorage.getItem('listaEstado');	
	//iniciliza a lista vazia
	let listEstado;
	//verificar se a string no local storage nao é null
	
	if(listEstadoStr == null){
		listEstado = [];
	} else {
		listEstado = JSON.parse(listEstadoStr);
	}
	
	//adiciona um novo estado a lista de estados.
	listEstado.push(estado);
	
	listEstadoStr = JSON.stringify(listEstado);
	
	localStorage.setItem('listaEstado', listEstadoStr);
	
	//salva o objeto estado no local storage
}
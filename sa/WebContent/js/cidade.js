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
	
	let cidadeStr = JSON.stringify(cidade);
	localStorage.setItem('Cidade', cidadeStr);

	alert('Cidade salva com sucesso');

	abrirPagina('../index.html');

}
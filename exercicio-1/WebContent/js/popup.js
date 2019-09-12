function abrirprompt() {
	let nome = prompt("Digite seu nome:", "");
	//alert("O nome digitado foi: " + nome);
	let p = document.getElementById("p_nome");
	p.innerHTML = nome;
	let gostou = confirm("Gostou da página, " + nome +"?");
	if (gostou) {
		alert("Obrigado!");
		} else {
		alert("Que pena mother fucker!")
		}
}

function exibirvariavel() {
	alert("A variável nome possui a seguinte informação: " + nome);
}


function exibirData() {
	let data = new Date();
	alert(data);
	let p = document.getElementById("p_data");
	p.innerHTML = data;
	
	//document.write(data);
}
function Funcionario(nome, ctps, salario) {
	this.nome = nome;
	this.ctps = ctps;
	this.salario = salario;	
}

Funcionario.prototype.irpf = 0;

function CalcularIr() {
	if (this.salario>=0 && this.salario<=1903) {
		this.irpf = 0;
	} else if (this.salario>1903 && this.salario<=2826) {
		this.irpf = this.salario * 7.5 / 100;
	} else if (this.salario>2826) {
		this.irpf = this.salario * 15 / 100;
	}
}

Funcionario.prototype.calcularIr = calcularIr;
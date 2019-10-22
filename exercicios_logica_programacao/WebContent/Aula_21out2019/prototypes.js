// Criação do construtor Produto
function produto (nome, marca, preco, icms) {
    this.nome = nome;
    this.marca = marca;
    this.preco = preco;
    this.icms = icms;
}

produto.prototype.icms = 0;


function calcularIcms () {
    this.icms = this.preco * 17 / 100;
}


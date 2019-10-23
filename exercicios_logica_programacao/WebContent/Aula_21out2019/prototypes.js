// Criação do construtor Produto
function Produto (nome, marca, preco) {
    this.nome = nome;
    this.marca = marca;
    this.preco = preco;
}

// Criação de um atributo do objeto.
Produto.prototype.icms = 0;


function calcularIcms(aliquota) {
    this.icms = this.preco * aliquota / 100;
}

// Neste caso, temos a criação de um método (ação ou atividade) do objeto.
Produto.prototype.calcularIcms = calcularIcms;

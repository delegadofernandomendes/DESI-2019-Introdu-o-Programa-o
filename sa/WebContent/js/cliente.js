function Cadastro(nome, nascimento, cpf, rg, sexo, endereco, cep, numero,
complemento, telefone, celular, email, estado, cidade) {
    this.nome = nome;
    this.nascimento = nascimento;
    this.cpf = cpf;
    this.rg = rg;
    this.sexo = sexo;
    this.endereco = endereco;
    this.cep = cep;
    this.numero = numero;
    this.complemento = complemento;
    this.telefone = telefone;
    this.celular = celular;
    this.email = email;
    this.estado = estado;
    this.cidade = cidade;
}
    
function salvarCliente() {
    console.log('teste');
    let input = document.getElementById ('nome_cliente')
    let nome = input.value;
    
    input = document.getElementById('data_cliente')
    let nascimento = input.value;
    
    input = document.getElementById('cpf_cliente')
    let cpf = input.value;
    
    input = document.getElementById('rg_cliente')
    let rg = input.value;
    
    input = document.getElementById('sexo_cliente')
    let sexo = input.value;
    
    input = document.getElementById('endereco_cliente')
    let endereco = input.value;
    
    input = document.getElementById('cep_cliente')
    let cep = input.value;
    
    input = document.getElementById('numero_cliente')
    let numero = input.value;
    
    input = document.getElementById('complemento_cliente')
    let complemento = input.value;
    
    input = document.getElementById('telefone_cliente')
    let telefone = input.value;
    
    input = document.getElementById('celular_cliente')
    let celular = input.value;
    
    input = document.getElementById('email_cliente')
    let email = input.value;

    input = document.getElementById('comboEstado')
    let estado = input.value;

    input = document.getElementById('comboCidade')
    let cidade = input.value;
    
    let cliente = new Cadastro (nome, nascimento, cpf, rg, sexo, endereco, cep, numero,
    complemento, telefone, celular, email, estado, cidade);
    
    let ListClienteStr = localStorage.getItem('listaCliente');
    let listCliente = [];
    if (ListClienteStr !=null) {
    listCliente = JSON.parse(ListClienteStr);
    }
    
    let encontrei = false;
   
    for(let i=0;i<listCliente.length;i++){
        if(listCliente[i].email == cliente.email){
            encontrei = true;
            alert('E-mail já existe! ');
        }
    
        if(listCliente[i].cpf == cliente.cpf){
            encontrei = true;
            alert('CPF já existe! ');
        }

        if(listCliente[i].rg == cliente.rg){
            encontrei = true;
            alert('RG já existe! ');
        }
    
    }
    
    if(encontrei) {
    alert('Cliente já cadastrado!');
    return false;
    }
    
    listCliente.push(cliente);
    
    let listClienteStr = JSON.stringify(listCliente);
    
    localStorage.setItem('listaCliente', listClienteStr);
    alert('Dados cadastrados com sucesso!');
    //A linha abaixo faz com que a página seja recarregada, limpando o formulário.
    document.location.reload(true);
    }

    function carregarDadosEstado() {
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

    function carregarDadosCidade() {
        // pegar a lista de cidades do storage
        
        let cidadeStr = localStorage.getItem('listaCidade');
        let listaCidade = [];
        
        if (cidadeStr != null) {
            listaCidade = JSON.parse(cidadeStr);
        }
    
        let comboCidade = document.getElementById("comboCidade");
        let option;
    
        for (let index = 0; index < listaCidade.length; index++) {
            option = document.createElement("option");
            option.text = listaCidade[index].nome;
            option.value = listaCidade[index].nome;
            comboCidade.add(option);
        }  
    }




    
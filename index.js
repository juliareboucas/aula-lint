function realizarPedido(idDoProduto, quantidade) {
    const produto = getProdutoById(idDoProduto); //ok
    if (!produto) {
        return 'Produto não encontrado';
    }

    //calculando valor
    const frete = 10;
    const valorTotal = (produto.valor * quantidade) + frete;
    //criacao do pedido
    const pedido = {
        idDoProduto,
        valorTotal,
        id: 36437254524, //criacao do id
        quantidade
    };
    const response = salvarNoBanco(pedido);

    //validacao do pedido
    if(response){
        return 'Pedido realizado com sucesso';
    }
    return 'Erro ao realizar pedido';
}

function salvarNoBanco(pedido) {
    return pedido;
}

function getProdutoById(idDoProduto){
    const produtoMockado = {
        nome: 'Produto Mockado',
        id: idDoProduto,
        valor: 100,
        tipo: 'Produto'
    };
    return produtoMockado;
}
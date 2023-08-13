class CaixaDaLanchonete {
    
    calcularValorDaCompra(metodoDePagamento, itens) {
        
        var desconto;
        var listapedido;
        
        //Validação do Método de Pagamento
        switch(metodoDePagamento){
            case "dinheiro": desconto = 0.95;
                break;
            case "debito":  desconto = 1;
                break;
            case "credito": desconto = 1.03;
                break;
            default: return "Forma de pagamento inválida!";
        }
        listapedido = itens.toString();
        if(validarPedido(itens) != null)
        return validarPedido(itens);
        else
        return calcPreco(desconto, listapedido);
        
        

    }

}

function validarPedido(itens){
    
    var listapedido;

        if (itens[0] == null)
        return "Não há itens no carrinho de compra!";
    
        listapedido = itens.toString();
        const quantPedido = listapedido.match(/\d/g);

        for(let i = 0; i <= quantPedido.length; i++){
            if (quantPedido[i] == 0) 
                return "Quantidade inválida!";
        }

        const cardapPedido = listapedido.split(",");
        for(let i = 0; i < itens.length * 2; i += 2){
            if (cardapPedido[i] != "cafe" && cardapPedido[i] != "chantily" && cardapPedido[i] != "suco" && cardapPedido[i] != "sanduiche" &&
            cardapPedido[i] != "queijo" && cardapPedido[i] != "salgado" && cardapPedido[i] != "combo1" && cardapPedido[i] != "combo2" && cardapPedido[i] != Number )
                return "Item inválido!";
        }
        
        for(let i = 0; i < itens.length * 2; i ++){
            if(cardapPedido[i] == "chantily"){
                const temcafe = listapedido.match(/cafe/);
                if(temcafe == null)
                    return "Item extra não pode ser pedido sem o principal";
            }
            if(cardapPedido[i] == "queijo"){
                const temsuco = listapedido.match(/sanduiche/);
                if(temsuco == null)
                    return "Item extra não pode ser pedido sem o principal";
            }
        }
        
        

}

function calcPreco(desconto, listapedido){

    const pedido = listapedido.match(/cafe|chantily|suco|sanduiche|queijo|salgado|combo1|combo2/g);
    const quant = listapedido.match(/\d/g);
    var preco = [];

    for(var i = 0; i < pedido.length; i++){
        switch(pedido[i]){
            case "cafe": preco[i] = 3.00 * quant[i];
                break;
            case "chantily": preco[i] = 1.50 * quant[i];
                break;
            case "suco": preco[i] = 6.20 * quant[i];
                break;
            case "sanduiche": preco[i] = 6.50 * quant[i];
                break;
            case "queijo": preco[i] = 2.00 * quant[i];
                break;
            case "salgado": preco[i] = 7.25 * quant[i];
                break;
            case "combo1": preco[i] = 9.50 * quant[i];
                break;
            case "combo2": preco[i] = 7.50 * quant[i];
                break;
        }
    }

        var totalnum = 0;
        preco.forEach(item => { totalnum += item});
        totalnum = totalnum * desconto;
        var totalstr = totalnum.toFixed([2]).toString();
        totalstr = totalstr.split(".");
        totalstr = totalstr.join(",");
         

    return "R$ " + totalstr;
}

export { CaixaDaLanchonete };

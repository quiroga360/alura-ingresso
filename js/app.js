const comprar = () => {

    // DOM: tipo de ingresso
    const ingressoEscolhidoInput = document.querySelector('#tipo-ingresso').value;

    // DOM: quantidade de ingresso para comprar
    const ingressoEscolhidoQuantidadeInput = parseInt(document.querySelector('#qtd').value);

    // DOM: quantidade de ingresso disponível
    let ingressoEscolhidoQuantidadeDisponivel = document.querySelector(`#qtd-${ingressoEscolhidoInput}`);

    console.log(ingressoEscolhidoQuantidadeDisponivel)

    if (isNaN(ingressoEscolhidoQuantidadeInput) || ingressoEscolhidoQuantidadeInput > parseInt(ingressoEscolhidoQuantidadeDisponivel.innerHTML)) {

        alert('A quantidade de compra precisa ser um número menor ou igual a quantidade disponível.');

    } else {

        ingressoEscolhidoQuantidadeDisponivel.innerHTML = parseInt(ingressoEscolhidoQuantidadeDisponivel.innerHTML) - parseInt(ingressoEscolhidoQuantidadeInput)

    }

}



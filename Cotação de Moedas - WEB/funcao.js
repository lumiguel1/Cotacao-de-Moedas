function validar(){
    var item = '';
    // Pega o valor do ID.
    item = document.getElementById('1');
    // Busca o atributo 'SRC'.
    src = item.getAttribute('src');
    // Substitui o valor da HTML.
    document.getElementById('imgMoeda').innerHTML = `<img src="${src}" alt="BitCoin">
    <form action="" id="dados">
        Valor em Reais R$: <input type="text" id="cidade" disabled size="30" placeholder="R$"><br>
    </form>`;
}

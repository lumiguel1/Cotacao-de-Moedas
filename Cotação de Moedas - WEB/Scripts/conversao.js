function enviar(){
    if(!isNaN(document.getElementById('valor1').value) && document.getElementById('valor1').value != ""){
        document.getElementById('money').style.display="grid";
    }
    else{
        alert("Você não digitou nenhum valor para conversão")
        document.getElementById('money').style.display="none";
        document.getElementById('valor').value = "";
        document.getElementById('logo').src = "./Imagens/logo.png"
    }
}
function tente(){
    document.getElementById('funfa').style.backgroundColor="#000000"
    document.getElementById('On2').style.display="flex";
    document.getElementById('On').style.display="none";
}
function tente2(){
    document.getElementById('funfa').style.backgroundColor="#f2f2f2"
    document.getElementById('On').style.display="flex";
    document.getElementById('On2').style.display="none";
}
function linkCoin(){
    var url = 'https://economia.awesomeapi.com.br/all'
    return url
}

async function validar(){
    // Troca a logo pela Imagem da moeda  
    var moeda = document.getElementById('1').src;
    document.getElementById('logo').src = moeda;
    // Converção.
    var campo = document.getElementById('valor')
    var real = document.getElementById('valor1').value

    // Faz a Request da API.
    await fetch(linkCoin(), { method: 'GET' })
        .then(function (response) {
            response.json()
                .then(function (dado) {
                    campo.value = dado.BTC.ask * real;
                });
        })
};
async function validar2(){
    // Troca a logo pela Imagem da moeda
    var moeda = document.getElementById('2').src;
    document.getElementById('logo').src = moeda;

    // Converção.
    var campo = document.getElementById('valor')
    var real = document.getElementById('valor1').value

    // Faz a Request da API.
    await fetch(linkCoin(), { method: 'GET' })
        .then(function (response) {
            response.json()
                .then(function (dado) {
                    campo.value = dado.USD.ask * real;
                });
        })
};
async function validar3(){
    // Troca a logo pela Imagem da moeda
    var moeda = document.getElementById('3').src;
    document.getElementById('logo').src = moeda;

    // Converção.
    var campo = document.getElementById('valor')
    var real = document.getElementById('valor1').value

    // Faz a Request da API.
    await fetch(linkCoin(), { method: 'GET' })
        .then(function (response) {
            response.json()
                .then(function (dado) {
                    campo.value = dado.CAD.ask * real;
                });
        })
};
async function validar4(){
    // Troca a logo pela Imagem da moeda
    var moeda = document.getElementById('4').src;
    document.getElementById('logo').src = moeda;

    // Converção.
    var campo = document.getElementById('valor')
    var real = document.getElementById('valor1').value

    // Faz a Request da API.
    await fetch(linkCoin(), { method: 'GET' })
        .then(function (response) {
            response.json()
                .then(function (dado) {
                    campo.value = dado.GBP.ask * real;
                });
        })
};
async function validar5(){
    // Troca a logo pela Imagem da moeda
    var moeda = document.getElementById('5').src;
    document.getElementById('logo').src = moeda;

    // Converção.
    var campo = document.getElementById('valor')
    var real = document.getElementById('valor1').value

    // Faz a Request da API.
    await fetch(linkCoin(), { method: 'GET' })
        .then(function (response) {
            response.json()
                .then(function (dado) {
                    campo.value = dado.EUR.ask * real;
                });
        })
};
async function validar6(){
    // Troca a logo pela Imagem da moeda
    var moeda = document.getElementById('6').src;
    document.getElementById('logo').src = moeda;

    // Converção.
    var campo = document.getElementById('valor')
    var real = document.getElementById('valor1').value

    // Faz a Request da API.
    await fetch(linkCoin(), { method: 'GET' })
        .then(function (response) {
            response.json()
                .then(function (dado) {
                    campo.value = dado.CHF.ask * real;
                });
        })
};
async function validar7(){
    // Troca a logo pela Imagem da moeda
    var moeda = document.getElementById('7').src;
    document.getElementById('logo').src = moeda;

    // Converção.
    var campo = document.getElementById('valor')
    var real = document.getElementById('valor1').value

    // Faz a Request da API.
    await fetch(linkCoin(), { method: 'GET' })
        .then(function (response) {
            response.json()
                .then(function (dado) {
                    campo.value = dado.JPY.ask * real;
                });
        })
};
async function validar8(){
    // Troca a logo pela Imagem da moeda
    var moeda = document.getElementById('8').src;
    document.getElementById('logo').src = moeda;

    // Converção.
    var campo = document.getElementById('valor')
    var real = document.getElementById('valor1').value

    // Faz a Request da API.
    await fetch(linkCoin(), { method: 'GET' })
        .then(function (response) {
            response.json()
                .then(function (dado) {
                    campo.value = dado.CNY.ask * real;
                });
        })
};
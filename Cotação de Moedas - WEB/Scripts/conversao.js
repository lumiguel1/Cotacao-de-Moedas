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

async function validar(){
    // Troca a logo pela Imagem da moeda
    var moeda = document.getElementById('1').src;
    document.getElementById('logo').src = moeda;

    // Converção.
    var url = 'https://economia.awesomeapi.com.br/all/BTC-BRL'
    var campo = document.getElementById('valor')
    var real = document.getElementById('valor1').value

    // Faz a Request da API.
    await fetch(url, { method: 'GET' })
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
    var url = 'https://economia.awesomeapi.com.br/all/USD-BRL'
    var campo = document.getElementById('valor')
    var real = document.getElementById('valor1').value

    // Faz a Request da API.
    await fetch(url, { method: 'GET' })
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
    var url = 'https://economia.awesomeapi.com.br/all/CAD-BRL'
    var campo = document.getElementById('valor')
    var real = document.getElementById('valor1').value

    // Faz a Request da API.
    await fetch(url, { method: 'GET' })
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
    var url = 'https://economia.awesomeapi.com.br/all/GBP-BRL'
    var campo = document.getElementById('valor')
    var real = document.getElementById('valor1').value

    // Faz a Request da API.
    await fetch(url, { method: 'GET' })
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
    var url = 'https://economia.awesomeapi.com.br/all/EUR-BRL'
    var campo = document.getElementById('valor')
    var real = document.getElementById('valor1').value

    // Faz a Request da API.
    await fetch(url, { method: 'GET' })
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
    var url = 'https://economia.awesomeapi.com.br/all/CHF-BRL'
    var campo = document.getElementById('valor')
    var real = document.getElementById('valor1').value

    // Faz a Request da API.
    await fetch(url, { method: 'GET' })
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
    var url = 'https://economia.awesomeapi.com.br/all/JPY-BRL'
    var campo = document.getElementById('valor')
    var real = document.getElementById('valor1').value

    // Faz a Request da API.
    await fetch(url, { method: 'GET' })
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
    var url = 'https://economia.awesomeapi.com.br/all/CNY-BRL'
    var campo = document.getElementById('valor')
    var real = document.getElementById('valor1').value

    // Faz a Request da API.
    await fetch(url, { method: 'GET' })
        .then(function (response) {
            response.json()
                .then(function (dado) {
                    campo.value = dado.CNY.ask * real;
                });
        })
};
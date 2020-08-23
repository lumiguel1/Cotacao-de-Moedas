async function validar() {
    // Troca a logo pela Imagem da moeda
    var moeda = document.getElementById('1').src;
    document.getElementById('logo').src = moeda;

    // Mostra a cotação.
    var url = 'https://economia.awesomeapi.com.br/all/BTC-BRL'
    var campo = document.getElementById('valor')

    // Faz a Request da API.
    await fetch(url, { method: 'GET' })
        .then(function (response) {
            response.json()
                .then(function (dado) {
                    campo.value = dado.BTC.ask;
                });
        })
};

async function validar2() {
    // Troca a logo pela Imagem da moeda
    var moeda = document.getElementById('2').src;
    document.getElementById('logo').src = moeda;

    // Mostra a cotação.
    var url = 'https://economia.awesomeapi.com.br/all/USD-BRL '
    var campo = document.getElementById('valor')

    // Faz a Request da API.
    await fetch(url, { method: 'GET' })
        .then(function (response) {
            response.json()
                .then(function (dado) {
                    campo.value = dado.USD.ask;
                });
        })
};

async function validar3() {
    // Troca a logo pela Imagem da moeda
    var moeda = document.getElementById('3').src;
    document.getElementById('logo').src = moeda;

    // Mostra a cotação.
    var url = 'https://economia.awesomeapi.com.br/all/CAD-BRL'
    var campo = document.getElementById('valor')

    // Faz a Request da API.
    await fetch(url, { method: 'GET' })
        .then(function (response) {
            response.json()
                .then(function (dado) {
                    campo.value = dado.CAD.ask;
                });
        })
};

async function validar4() {
    // Troca a logo pela Imagem da moeda
    var moeda = document.getElementById('4').src;
    document.getElementById('logo').src = moeda;

    // Mostra a cotação.
    var url = 'https://economia.awesomeapi.com.br/all/GBP-BRL'
    var campo = document.getElementById('valor')

    // Faz a Request da API.
    await fetch(url, { method: 'GET' })
        .then(function (response) {
            response.json()
                .then(function (dado) {
                    campo.value = dado.GBP.ask;
                });
        })
};


async function validar5() {
    // Troca a logo pela Imagem da moeda
    var moeda = document.getElementById('5').src;
    document.getElementById('logo').src = moeda;

    // Mostra a cotação.
    var url = 'https://economia.awesomeapi.com.br/all/EUR-BRL'
    var campo = document.getElementById('valor')

    // Faz a Request da API.
    await fetch(url, { method: 'GET' })
        .then(function (response) {
            response.json()
                .then(function (dado) {
                    campo.value = dado.EUR.ask;
                });
        })
};

async function validar6() {
    // Troca a logo pela Imagem da moeda
    var moeda = document.getElementById('6').src;
    document.getElementById('logo').src = moeda;

    // Mostra a cotação.
    var url = 'https://economia.awesomeapi.com.br/all/CHF-BRL '
    var campo = document.getElementById('valor')

    // Faz a Request da API.
    await fetch(url, { method: 'GET' })
        .then(function (response) {
            response.json()
                .then(function (dado) {
                    campo.value = dado.CHF.ask;
                });
        })
};

async function validar7() {
    // Troca a logo pela Imagem da moeda
    var moeda = document.getElementById('7').src;
    document.getElementById('logo').src = moeda;

    // Mostra a cotação.
    var url = 'https://economia.awesomeapi.com.br/all/JPY-BRL '
    var campo = document.getElementById('valor')

    // Faz a Request da API.
    await fetch(url, { method: 'GET' })
        .then(function (response) {
            response.json()
                .then(function (dado) {
                    campo.value = dado.JPY.ask;
                });
        })
};

async function validar8() {
    // Troca a logo pela Imagem da moeda
    var moeda = document.getElementById('8').src;
    document.getElementById('logo').src = moeda;

    // Mostra a cotação.
    var url = 'https://economia.awesomeapi.com.br/all/CNY-BRL '
    var campo = document.getElementById('valor')

    // Faz a Request da API.
    await fetch(url, { method: 'GET' })
        .then(function (response) {
            response.json()
                .then(function (dado) {
                    campo.value = dado.CNY.ask;
                });
        })
};

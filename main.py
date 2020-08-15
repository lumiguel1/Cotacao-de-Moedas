import requests
from time import sleep


class Cotacao:
    def __init__(self):
        def DolarAmericano():
            r = requests.get("https://economia.awesomeapi.com.br/all/USD-BRL")
            dados = r.json()
            cp = dados['USD']
            print('=' * 30)
            print("""Nome: {}
Alta: R${}
Baixa: R${}
R$:{}""".format(cp['name'], cp['high'], cp['low'], cp['ask']))
            print('=' * 30)
            print()
            sleep(5)

        def DolarCanadense():
            r = requests.get("https://economia.awesomeapi.com.br/all/CAD-BRL")
            dados = r.json()
            cp = dados['CAD']
            print('=' * 30)
            print("""Nome: {}
Alta: R${}
Baixa: R${}
R$: {}""".format(cp['name'], cp['high'], cp['low'], cp['ask']))
            print('=' * 30)
            sleep(5)

        def Euro():
            r = requests.get("https://economia.awesomeapi.com.br/all/EUR-BRL")
            dados = r.json()
            cp = dados['EUR']
            print('=' * 30)
            print("""Nome: {}
Alta: R${} 
Baixa: R${}
R$: {}""".format(cp['name'], cp['high'], cp['low'], cp['ask']))
            print('=' * 30)
            sleep(5)

        def Iene():
            r = requests.get("https://economia.awesomeapi.com.br/all/JPY-BRL")
            dados = r.json()
            cp = dados['JPY']
            print('=' * 30)
            print("""Nome: {}
Alta: R${}
Baixa: R${}
R$: {}""".format(cp['name'], cp['high'], cp['low'], cp['ask']))
            print('=' * 30)
            sleep(5)

        def Libra():
            r = requests.get("https://economia.awesomeapi.com.br/all/GBP-BRL")
            dados = r.json()
            cp = dados['GBP']
            print('=' * 30)
            print("""Nome: {}
Alta: R${}
Baixa: R${}
R$: {}""".format(cp['name'], cp['high'], cp['low'], cp['ask']))
            print('=' * 30)
            sleep(5)

        def Yuan():
            r = requests.get("https://economia.awesomeapi.com.br/all/CNY-BRL")
            dados = r.json()
            cp = dados['CNY']
            print('=' * 30)
            print("""Nome: {}
Alta: {}
Baixa: {}
R$: {}""".format(cp['name'], cp['high'], cp['low'], cp['ask']))
            print('=' * 30)
            sleep(5)

        def Bitcoin():
            r = requests.get("https://economia.awesomeapi.com.br/all/BTC-BRL")
            dados = r.json()
            cp = dados['BTC']
            print('=' * 30)
            print("""Nome: {}
Alta: R${}
Baixa: R${}
R$: {}""".format(cp['name'], cp['high'], cp['low'], cp['ask']))
            print('=' * 30)
            sleep(5)

        def All():
            r = requests.get("https://economia.awesomeapi.com.br/all")
            dados = r.json()
            moedas = ['Dólar Comercial', 'Dólar Canadense', 'Euro',
                      'Libra Esterlina', 'Bitcoin', 'Iene Japonês',
                      'Yuan Chinês']
            print('=' * 30)
            for c in dados:
                cp = dados[c]
                if cp['name'] in moedas:
                    print("""Nome: {}   
Alta: R${}  
Baixa: R${} 
R$: {}\n""".format(cp['name'], cp['high'], cp['low'], cp['ask']))
            print('=' * 30)
            sleep(5)

        while True:
            print("""MENU DE CONVERSÕES
1) Dólar Americano
2) Dólar Canadense
3) Euro
4) Iene
5) Libra
6) Yuan
7) Bitcoin
8) Todas as Moedas
9) Sair do Menu
""")
            escolha = str(input('Digite sua escolha: '))
            if escolha == '1':
                DolarAmericano()
            elif escolha == '2':
                DolarCanadense()
            elif escolha == '3':
                Euro()
            elif escolha == '4':
                Iene()
            elif escolha == '5':
                Libra()
            elif escolha == '6':
                Yuan()
            elif escolha == '7':
                Bitcoin()
            elif escolha == '8':
                All()
            elif escolha == '9':
                print('Saindo...')
                break


usuario = Cotacao()

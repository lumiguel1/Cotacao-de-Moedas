# PROJETO PYTHON: Cotação de Moedas

> Um programa que retorna a cotação de moedas em tempo real.

  O sistema deve exibir um menu de opções para o usuário escolher entre quais tipos de moedas ele deseja ver:
- Dólar Americano
- Dólar Canadense
- Euro
- Iene
- Libra
- Yuan
- Bitcoin
- Todos

Ao escolher, o sistema deve retornar o Nome, Alta, Baixa e Conversão em reais(R$) da Moeda. Perguntar se
o usuário quer repetir a operação com outra moeda, se não, finalizar o sistema.


# Tecnologias Utilizadas
* **_PyCharm;_**
* **_Python 3;_**

# Exemplo de Uso
### Classe
```
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
```
![Classe](https://github.com/ThiagoLozano/Cotacao-de-Moedas/blob/master/Screenshot/Classe.PNG)

### Menu
```
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
```
![Menu](https://github.com/ThiagoLozano/Cotacao-de-Moedas/blob/master/Screenshot/Menu.PNG)

# Bibliotecas e Configurações

### Biblioteca Python Utilizada

```
import requests
from time import sleep
```
![Biblioteca](https://github.com/ThiagoLozano/Cotacao-de-Moedas/blob/master/Screenshot/Bibliotecas.PNG)

### Configurações

* API: https://docs.awesomeapi.com.br/api-de-moedas

* Uso da API __awesomeapi__ que tem como retorno um arquivo JSON().
```
https://economia.awesomeapi.com.br/all
https://economia.awesomeapi.com.br/all/*código da moeda aqui*
```

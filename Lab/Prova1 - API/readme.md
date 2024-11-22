# Foi utilizado como base para esses testes a aplicação que se encontra no seguinte repositório -> https://github.com/S204-Inatel-2024-2/AgroControl


## Configuração obrigatória antes de iniciar os testes

Antes de iniciar os testes, siga as seguintes instruções:

1. Clone o repositório do link: [https://github.com/S204-Inatel-2024-2/AgroControl.git](https://github.com/S204-Inatel-2024-2/AgroControl.git) utilizando o comando:
    ```bash
    git clone https://github.com/S204-Inatel-2024-2/AgroControl.git
    ```

2. Após clonar o repositório em sua máquina local, siga os passos abaixo:

    1. Navegue até o diretório `~/backend` e execute o comando `npm install` para instalar todas as dependências do projeto.
    2. Configure as variáveis de ambiente localizadas no caminho `~/backend/src`. Um arquivo de configuração será disponibilizado na entrega do Teams para que tudo funcione corretamente.
    3. Configure o banco de dados no arquivo de configuração existente no caminho `~/backend/src/db/config/config.json`. Um arquivo de configuração será disponibilizado na entrega do Teams para que tudo funcione corretamente.
    4. Após realizar essas configurações, a partir do diretório `~/backend/src`, execute o comando `node server.js` ou `nodemon server.js`.
    5. O servidor será iniciado em seu `localhost` na porta 3000, onde o ambiente estará preparado para receber os testes.

## Parte da prova

Importe os arquivos JSON (collection e environment) para o Postman e execute a collection. Os resultados podem ser visualizados através da aba de testes ou pelo relatório executado pelo Newman.
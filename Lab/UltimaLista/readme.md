# Passo a Passo para Importar a Collection no Postman
0. Faça o download da colection
1. Abra o Postman.
2. Clique no botão "Import" no canto superior esquerdo.
3. Selecione a aba "Upload Files".
4. Navegue até a pasta `~S206---Qualidade-de-software/Lab/UltimaLista/`.
5. Selecione o arquivo da collection que deseja importar e clique em "Open".
6. A collection será importada e aparecerá na lista de collections do Postman.

# Passo a Passo para Gerar um Relatório com o Newman

1. Certifique-se de que o Node.js e o Newman estão instalados em sua máquina. Caso não estejam, instale-os com os seguintes comandos:
    ```bash
    npm install -g newman
    ```

2. Abra o terminal ou prompt de comando.
3. Navegue até a pasta onde a collection está localizada:
    ```bash
    cd ~S206---Qualidade-de-software/Lab/UltimaLista/
    ```

4. Execute o comando do Newman para rodar a collection e gerar um relatório:
    ```bash
    newman run <nome-da-collection>.json -r html
    ```

5. O relatório será gerado em formato HTML na mesma pasta. Abra o arquivo HTML no navegador para visualizar o relatório.

# Design_Patterns
Repositorio destinado ao trabalho utilizando Design Patterns

# Ideia:
A ideia do repositorio é contar as palavras de uma frase qualquer e notificar os observers.

## Opções de contagem

    - Quantidade de palavras

    - Quantidade de palavras com letras maiusculas
    
    - Quantidade de palavras com caracteres pares


# Comandos para utilização do projeto:

```npm install``` -> Para adicionar as dependencias do projeto.

```npm i @types/mocha``` -> Adiciona as dependencias para teste do mocha

```npm install -g typescript``` -> Para poder usar tsc no terminal

```tsc src/principal.ts``` -> Caso nao esteja gerado os arquivos .js utilizar esse comando.

```node src/principal.js``` -> Conta as palavras e notifica os observes.

# Testes:

```npm test``` -> Faz os testes de contagem e de notificação do observador.

É testado se os metodos de contagem estão retornando o esperado e se os observers estao sendo adicionados, removidos e notificados.
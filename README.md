# Design_Patterns
Repositorio destinado ao trabalho utlizando Design Patterns

# Ideia:
A ideia do repositorio é contar as palavras de uma frase qualquer e notificar os observers.

## Opções de contagem

    - Quantidade de palavras

    - Quantidade de palavras com letras maiusculas
    
    - Quantidade de palavras com caracteres pares


# Comandos para utilização do projeto:

```tsc src/principal.ts``` -> Para adicionar as dependencias do projeto.

```tsc src/principal.ts``` -> Caso nao esteja gerado os arquivos .js utilizar esse comando.

```node src/principal.js``` -> Conta as palavras e notifica os observes.

# Testes:

```npm test``` -> Faz os testes de contagem e de notificação do observador.

É testado se os metodos de contagem estão retornando o esperado e se os observers estao sendo adicionados, removidos e notificados.
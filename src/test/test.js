var expect = require ('chai').expect;
var ContadorPalavras = require('../contadores/contadorPalavrasObserver.js').default;

describe('Teste do projeto: ',()=>{

    const frase = "Frase usada para teste.";
    var contador = new ContadorPalavras();

    it('Teste contagem de palavras', () => {
        expect(contador.contar(frase, 1 )).to.eql(4);

    });

    it('Teste contagem com numero de caracteres pares', () => {

        expect(contador.contar(frase, 2 )).to.eql(2);

    });

    it('Teste contagem de palavras que iniciam com letras maisculas', () => {
        expect(contador.contar( frase, 3 )).to.eql(1);

    });
    it('Teste contagem de palavras com uma opção que não existe', () => {
        expect(contador.contar( frase, 5 )).to.eql('Escolha não existe');

    });
})
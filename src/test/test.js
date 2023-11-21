var expect = require('chai').expect;
var Observavel = require('../contadores/Observavel.js').default;
var Observador = require('../contadores/Observador.js').default;

describe('Teste do projeto: ',()=>{

    const frase = "Frase usada para teste.";
    
    var observavel = new Observavel();

    var observador = new Observador(1);

    it('Teste contagem de palavras', () => {
        expect(observavel.NumeroDePalavras( frase )).to.eql(4);
    });

    it('Teste contagem com numero de caracteres pares', () => {
        expect(observavel.NumeroPares( frase )).to.eql(2);
    });

    it('Teste contagem com numero de palavras que começam com maiscula', () => {
        expect(observavel.NumeroPalavrasMaiusculas( frase )).to.eql(1);
    });

    it('Teste de adicionar observador', () => {
        expect(observavel.adicionarObservador( observador )).to.eql('Observador adicionado!');
    });

    it('Teste de remover observador', () => {
        expect(observavel.removeObservador( observador )).to.eql('Observador removido!');
    });

    it('Teste de notificar observador', () => {
        expect(observavel.notificaObservadores()).to.eql('Observadores notificados!');

    });

})
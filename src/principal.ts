import ContadorPalavrasObserver from './contadores/contadorPalavrasObserver.js'

const contadorPalavrasObserver = new ContadorPalavrasObserver();

const frase = "Uso amaciante em casa";

console.log("Total de palavras: " , contadorPalavrasObserver.contar( frase, 1 ));
console.log("Total de palavras com numero de caracteres pares: " , contadorPalavrasObserver.contar( frase, 2 ));
console.log("Total de palavras começadas com letras maiusculas: " , contadorPalavrasObserver.contar( frase, 3 ));

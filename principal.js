import ContadorPalavrasObserver from './contadores/contadorPalavrasObserver.js'

const contadorPalavrasObserver = new ContadorPalavrasObserver();
contadorPalavrasObserver.contar("Frase Teste um dois tres D gegdfgewrgewfgsd");
  
console.log("Total de palavras:", contadorPalavrasObserver.contadorPalavras.total);
console.log("Total de palavras com quantidades pares de caracteres:", contadorPalavrasObserver.contadorPalavrasPares.total);
console.log("Total de palavras começadas com maiúsculas:", contadorPalavrasObserver.contadorPalavrasComecadasComMaiusculas.total);
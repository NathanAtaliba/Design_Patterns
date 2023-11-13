"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contadorPalavrasObserver_js_1 = require("./contadores/contadorPalavrasObserver.js");
var contadorPalavrasObserver = new contadorPalavrasObserver_js_1.default();
contadorPalavrasObserver.contar("Frase Teste um dois tres D gegdfgewrgewfgsd");
console.log("Total de palavras:", contadorPalavrasObserver.contadorPalavras.total);
console.log("Total de palavras com quantidades pares de caracteres:", contadorPalavrasObserver.contadorPalavrasPares.total);
console.log("Total de palavras começadas com maiúsculas:", contadorPalavrasObserver.contadorPalavrasComecadasComMaiusculas.total);

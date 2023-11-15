"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contadorPalavrasObserver_js_1 = require("./contadores/contadorPalavrasObserver.js");
var contadorPalavrasObserver = new contadorPalavrasObserver_js_1.default();
var frase = "Uso amaciante em casa";
console.log("Total de palavras: ", contadorPalavrasObserver.contar(frase, 1));
console.log("Total de palavras com numero de caracteres pares: ", contadorPalavrasObserver.contar(frase, 2));
console.log("Total de palavras começadas com letras maiusculas: ", contadorPalavrasObserver.contar(frase, 3));

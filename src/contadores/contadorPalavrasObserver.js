"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contadorPalavras_js_1 = require("./contadorPalavras.js");
var contadorPalavrasPares_js_1 = require("./contadorPalavrasPares.js");
var contadorPalavrasComecadasComMaiusculas_js_1 = require("./contadorPalavrasComecadasComMaiusculas.js");
var ContadorPalavrasObserver = /** @class */ (function () {
    function ContadorPalavrasObserver() {
        this.contadorPalavras = new contadorPalavras_js_1.default();
        this.contadorPalavrasPares = new contadorPalavrasPares_js_1.default();
        this.contadorPalavrasComecadasComMaiusculas = new contadorPalavrasComecadasComMaiusculas_js_1.default();
        this.contadorPalavras.adicionarObservador();
        this.contadorPalavras.adicionarObservador();
    }
    ContadorPalavrasObserver.prototype.contar = function (frase) {
        this.contadorPalavras.contar(frase.split(" "));
        this.contadorPalavrasPares.contar(frase.split(" "));
        this.contadorPalavrasComecadasComMaiusculas.contar(frase.split(" "));
    };
    return ContadorPalavrasObserver;
}());
exports.default = ContadorPalavrasObserver;

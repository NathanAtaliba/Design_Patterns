"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contador_js_1 = require("./contador.js");
var ContadorPalavrasObserver = /** @class */ (function () {
    function ContadorPalavrasObserver() {
        this.contador = new contador_js_1.default();
        this.contador.adicionarObservador();
    }
    //addObserver(observer: Observer): void {
    //  this.observers.push(observer);
    //}
    ContadorPalavrasObserver.prototype.contar = function (frase, escolha) {
        if (escolha == 1) {
            var retorno = this.contador.contarPalavras(frase.split(" "));
            return retorno;
        }
        else if (escolha == 2) {
            var retorno = this.contador.contarPalavrasPares(frase.split(" "));
            return retorno;
        }
        else if (escolha == 3) {
            var retorno = this.contador.contarPalavrasComecadasComMaiusculas(frase.split(" "));
            return retorno;
        }
        else {
            var retorno = 'Escolha não existe';
            return retorno;
        }
    };
    return ContadorPalavrasObserver;
}());
exports.default = ContadorPalavrasObserver;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContadorPalavras = /** @class */ (function () {
    function ContadorPalavras() {
        this._total = 0;
    }
    ContadorPalavras.prototype.contarPalavras = function (frase) {
        var novoTotal = 0;
        for (var i = 0; i < frase.length; i++) {
            novoTotal = novoTotal + 1;
        }
        this._total = novoTotal;
        return this._total;
    };
    ContadorPalavras.prototype.contarPalavrasComecadasComMaiusculas = function (frase) {
        var novoTotal = 0;
        for (var i = 0; i < frase.length; i++) {
            if (frase[i][0].toUpperCase() === frase[i][0]) {
                novoTotal = novoTotal + 1;
            }
        }
        this._total = novoTotal;
        return this._total;
    };
    ContadorPalavras.prototype.contarPalavrasPares = function (frase) {
        var novoTotal = 0;
        for (var i = 0; i < frase.length; i++) {
            if ((frase[i].length % 2) === 0) {
                novoTotal = novoTotal + 1;
            }
        }
        this._total = novoTotal;
        return this._total;
    };
    Object.defineProperty(ContadorPalavras.prototype, "total", {
        get: function () {
            return this._total;
        },
        enumerable: false,
        configurable: true
    });
    ContadorPalavras.prototype.adicionarObservador = function () {
    };
    return ContadorPalavras;
}());
exports.default = ContadorPalavras;

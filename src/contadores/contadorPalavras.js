"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContadorPalavras = /** @class */ (function () {
    function ContadorPalavras() {
        this._total = 0;
    }
    ContadorPalavras.prototype.contar = function (frase) {
        var novoTotal = 0;
        for (var i = 0; i < frase.length; i++) {
            novoTotal = novoTotal + 1;
        }
        this._total = novoTotal;
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

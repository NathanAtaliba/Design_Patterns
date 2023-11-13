"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContadorPalavrasComecadasComMaiusculas = /** @class */ (function () {
    function ContadorPalavrasComecadasComMaiusculas() {
        this._total = 0;
    }
    ContadorPalavrasComecadasComMaiusculas.prototype.contar = function (frase) {
        var novoTotal = 0;
        for (var i = 0; i < frase.length; i++) {
            if (frase[i][0].toUpperCase() === frase[i][0]) {
                novoTotal = novoTotal + 1;
            }
        }
        this._total = novoTotal;
    };
    Object.defineProperty(ContadorPalavrasComecadasComMaiusculas.prototype, "total", {
        get: function () {
            return this._total;
        },
        enumerable: false,
        configurable: true
    });
    return ContadorPalavrasComecadasComMaiusculas;
}());
exports.default = ContadorPalavrasComecadasComMaiusculas;

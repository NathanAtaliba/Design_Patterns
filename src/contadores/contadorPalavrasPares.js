"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContadorPalavrasPares = /** @class */ (function () {
    function ContadorPalavrasPares() {
        this._total = 0;
    }
    ContadorPalavrasPares.prototype.contar = function (frase) {
        var novoTotal = 0;
        for (var i = 0; i < frase.length; i++) {
            if ((frase[i].length % 2) === 0) {
                novoTotal = novoTotal + 1;
            }
            else {
                novoTotal = novoTotal;
            }
        }
        this._total = novoTotal;
    };
    Object.defineProperty(ContadorPalavrasPares.prototype, "total", {
        get: function () {
            return this._total;
        },
        enumerable: false,
        configurable: true
    });
    return ContadorPalavrasPares;
}());
exports.default = ContadorPalavrasPares;

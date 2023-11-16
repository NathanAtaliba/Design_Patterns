"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observador = /** @class */ (function () {
    function Observador(id) {
        this.id = id;
    }
    Observador.prototype.update = function (obs) {
        console.log("Observador ".concat(this.id, " foi notificado"));
        console.log("Contando todas as palavras: ".concat(obs.NumeroDePalavras(obs.getFrase())));
        console.log("Contando palavras pares: ".concat(obs.NumeroPalavrasMaiusculas(obs.getFrase())));
        console.log("Contando palavras mai\u00FAsculas: ".concat(obs.NumeroPalavrasMaiusculas(obs.getFrase())));
        return 'Observador atualizado';
    };
    return Observador;
}());
exports.default = Observador;

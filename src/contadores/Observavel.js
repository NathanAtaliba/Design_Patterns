"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observavel = /** @class */ (function () {
    function Observavel() {
        this.frase = "";
        this.observadores = [];
        this.observadores = [];
    }
    Observavel.prototype.adicionarObservador = function (obs) {
        this.observadores.push(obs);
    };
    Observavel.prototype.removeObservador = function (obs) {
        var index = this.observadores.indexOf(obs);
        if (index !== -1) {
            this.observadores.splice(index, 1);
        }
    };
    Observavel.prototype.notificaObservadores = function () {
        for (var _i = 0, _a = this.observadores; _i < _a.length; _i++) {
            var observador = _a[_i];
            observador.update(this);
        }
    };
    Observavel.prototype.NumeroDePalavras = function (frase) {
        this.frase = frase;
        var palavras = frase.split(" ");
        return palavras.length;
    };
    Observavel.prototype.NumeroPares = function (frase) {
        this.frase = frase;
        var contador = 0;
        for (var _i = 0, _a = frase.split(" "); _i < _a.length; _i++) {
            var palavra = _a[_i];
            if (palavra.length % 2 === 0) {
                contador++;
            }
        }
        return contador;
    };
    Observavel.prototype.NumeroPalavrasMaiusculas = function (frase) {
        var contador = 0;
        for (var _i = 0, _a = frase.split(" "); _i < _a.length; _i++) {
            var palavra = _a[_i];
            var letraInicial = palavra.charAt(0);
            var maiusculo = palavra.toUpperCase();
            var letraInicialMaiuscula = maiusculo.charAt(0);
            if (letraInicial === letraInicialMaiuscula) {
                contador++;
            }
        }
        return contador;
    };
    Observavel.prototype.getFrase = function () {
        return this.frase;
    };
    Observavel.prototype.setFrase = function (frase) {
        this.frase = frase;
    };
    Observavel.prototype.getObservadores = function () {
        return this.observadores;
    };
    Observavel.prototype.setObservadores = function (obs) {
        this.observadores = obs;
    };
    return Observavel;
}());
exports.default = Observavel;

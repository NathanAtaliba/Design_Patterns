"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observador_1 = require("./contadores/Observador");
var Observavel_1 = require("./contadores/Observavel");
var observador = new Observador_1.default(1);
var observavel = new Observavel_1.default();
observavel.adicionarObservador(observador);
observavel.setFrase("Exemplo de frase");
observavel.notificaObservadores();

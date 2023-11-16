import iObservador from "../interfaces/iObservador";
import Observavel from "./Observavel";
class Observador implements iObservador {
    id: number;

    constructor(id: number) {
        this.id = id;
    }

    update(obs: Observavel): void {
        console.log(`Observador ${this.id} foi notificado`);
        console.log(`Contando todas as palavras: ${obs.NumeroDePalavras(obs.getFrase())}`);
        console.log(`Contando palavras pares: ${obs.NumeroPalavrasMaiusculas(obs.getFrase())}`);
        console.log(`Contando palavras maiúsculas: ${obs.NumeroPalavrasMaiusculas(obs.getFrase())}`);
    }
}
export default Observador
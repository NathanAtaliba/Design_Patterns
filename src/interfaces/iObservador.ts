import Observavel from '../contadores/Observavel.ts';
interface iObservador {
    update(obs: Observavel): void;
}

export default iObservador;
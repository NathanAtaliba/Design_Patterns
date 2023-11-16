import Observador from "./contadores/Observador";
import Observavel from "./contadores/Observavel";


const observador = new Observador(1);
const observavel = new Observavel();

observavel.adicionarObservador(observador);
observavel.setFrase("Exemplo de frase");
observavel.notificaObservadores();
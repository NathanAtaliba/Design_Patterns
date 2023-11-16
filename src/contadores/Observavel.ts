import Observador from "./Observador";
import iObservavel from "../interfaces/iObservavel";

class Observavel implements iObservavel {
  private frase: string = "";
  private observadores: Observador[] = [];

  constructor() {
      this.observadores = [];
  }

  adicionarObservador(obs: Observador): void {
      this.observadores.push(obs);
  }

  removeObservador(obs: Observador): void {
      const index = this.observadores.indexOf(obs);
      if (index !== -1) {
          this.observadores.splice(index, 1);
      }
  }

  notificaObservadores(): void {
      for (const observador of this.observadores) {
          observador.update(this);
      }
  }

  NumeroDePalavras(frase: string): number {
      this.frase = frase;
      const palavras = frase.split(" ");
      return palavras.length;
  }

  NumeroPares(frase: string): number {
      this.frase = frase;
      let contador = 0;
      for (const palavra of frase.split(" ")) {
          if (palavra.length % 2 === 0) {
              contador++;
          }
      }
      return contador;
  }

  NumeroPalavrasMaiusculas(frase: string): number {
      let contador = 0;
      for (const palavra of frase.split(" ")) {
          const letraInicial = palavra.charAt(0);
          const maiusculo = palavra.toUpperCase();
          const letraInicialMaiuscula = maiusculo.charAt(0);

          if (letraInicial === letraInicialMaiuscula) {
              contador++;
          }
      }
      return contador;
  }

  getFrase(): string {
      return this.frase;
  }

  setFrase(frase: string): void {
      this.frase = frase;
  }

  getObservadores(): Observador[] {
      return this.observadores;
  }

  setObservadores(obs: Observador[]): void {
      this.observadores = obs;
  }
}

export default Observavel

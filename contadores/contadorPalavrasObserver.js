import ContadorPalavras from './contadorPalavras.js'
import ContadorPalavrasPares from './contadorPalavrasPares.js'
import ContadorPalavrasComecadasComMaiusculas from './contadorPalavrasComecadasComMaiusculas.js'

class ContadorPalavrasObserver {
    constructor() {
      this.contadorPalavras = new ContadorPalavras();
      this.contadorPalavrasPares = new ContadorPalavrasPares();
      this.contadorPalavrasComecadasComMaiusculas = new ContadorPalavrasComecadasComMaiusculas();
  
      this.contadorPalavras.adicionarObservador(this.contadorPalavrasPares);
      this.contadorPalavras.adicionarObservador(this.contadorPalavrasComecadasComMaiusculas);
    }

    contar(frase) {
      this.contadorPalavras.contar(frase.split(" "));
      this.contadorPalavrasPares.contar(frase.split(" "));
      this.contadorPalavrasComecadasComMaiusculas.contar(frase.split(" "));
    }

  }

  export default ContadorPalavrasObserver
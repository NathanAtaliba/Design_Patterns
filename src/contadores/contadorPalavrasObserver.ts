import ContadorPalavras from './contadorPalavras.js'
import ContadorPalavrasPares from './contadorPalavrasPares.js'
import ContadorPalavrasComecadasComMaiusculas from './contadorPalavrasComecadasComMaiusculas.js'

class ContadorPalavrasObserver {

  public contadorPalavras: ContadorPalavras
  public contadorPalavrasPares: ContadorPalavrasPares
  public contadorPalavrasComecadasComMaiusculas: ContadorPalavrasComecadasComMaiusculas

    constructor() {
      this.contadorPalavras = new ContadorPalavras();
      this.contadorPalavrasPares = new ContadorPalavrasPares();
      this.contadorPalavrasComecadasComMaiusculas = new ContadorPalavrasComecadasComMaiusculas();
  
      this.contadorPalavras.adicionarObservador();
      this.contadorPalavras.adicionarObservador();
    }

    contar(frase: string) {
      this.contadorPalavras.contar(frase.split(" "));
      this.contadorPalavrasPares.contar(frase.split(" "));
      this.contadorPalavrasComecadasComMaiusculas.contar(frase.split(" "));
    }

  }

  export default ContadorPalavrasObserver
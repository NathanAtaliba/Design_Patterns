import Contador from './contador.js'

class ContadorPalavrasObserver {
  //private observers: Observer[] = [];
  public contador: Contador
  
    constructor() {
      this.contador = new Contador();
     
      this.contador.adicionarObservador();
    }

    //addObserver(observer: Observer): void {
    //  this.observers.push(observer);
    //}

    contar(frase: string, escolha: number) {
      if(escolha == 1){
        const retorno = this.contador.contarPalavras(frase.split(" "));
        return retorno;
      }else if( escolha == 2){
        const retorno = this.contador.contarPalavrasPares(frase.split(" "));
        return retorno;
      }else if(escolha == 3){
        const retorno = this.contador.contarPalavrasComecadasComMaiusculas(frase.split(" "));
        return retorno;
      }else{
        const retorno = 'Escolha não existe';
        return retorno;
      }
    }

  }

  export default ContadorPalavrasObserver
class ContadorPalavras {
    constructor() {
      this._total = 0;
    }
  
    contar(frase) {
      
      let novoTotal=0;
      
      for(let i=0; i<frase.length; i++){              
        novoTotal = novoTotal + 1       
      }
      this._total = novoTotal;
    }
  
    get total() {
      return this._total;
    }

    adicionarObservador(){

    }

  }
  export default ContadorPalavras
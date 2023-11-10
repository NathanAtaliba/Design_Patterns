class ContadorPalavrasComecadasComMaiusculas {
    constructor() {
      this._total = 0;
    }
  
    contar(frase) {
      let novoTotal=0;
      
      for(let i=0; i<frase.length; i++){
  
        if (frase[i][0].toUpperCase() === frase[i][0]) {           
          novoTotal = novoTotal + 1       
      }
    }
      this._total = novoTotal;
    } 
  
    get total() {
      return this._total;
    }
  }

  export default ContadorPalavrasComecadasComMaiusculas
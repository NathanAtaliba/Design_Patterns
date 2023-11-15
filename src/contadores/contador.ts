class ContadorPalavras {
  private _total: number  
  
  constructor() {
      this._total = 0;
    }
  
    contarPalavras( frase: string[] ){
      
      let novoTotal=0;
      
      for(let i=0; i<frase.length; i++){              
        novoTotal = novoTotal + 1       
      }
      this._total = novoTotal;
      return this._total;
    }
  
    contarPalavrasComecadasComMaiusculas( frase: string[] ) {
      let novoTotal=0;
      
      for(let i=0; i<frase.length; i++){
  
        if (frase[i][0].toUpperCase() === frase[i][0]) {           
          novoTotal = novoTotal + 1;       
        }
      }
    this._total = novoTotal;
    return this._total;
    }

  contarPalavrasPares( frase: string[] ) {
    let novoTotal=0;

    for(let i = 0; i <  frase.length; i++){ 
      
      if ((frase[i].length % 2) === 0) {           
        novoTotal = novoTotal + 1;      
      }
    }
      this._total = novoTotal;
      return this._total;
  }  

    get total() {
      return this._total;
    }

    adicionarObservador(){

    }

  }
  export default ContadorPalavras
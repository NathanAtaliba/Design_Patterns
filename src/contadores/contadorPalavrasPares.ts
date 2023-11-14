class ContadorPalavrasPares {
  private _total: number  
  constructor() {
      this._total = 0;
    }
  
    contar( frase: string[] ) {
      let novoTotal=0;

      for(let i = 0; i <  frase.length; i++){ 
        
        if ((frase[i].length % 2) === 0) {           
          novoTotal = novoTotal + 1;      
        }
        else{
          novoTotal = novoTotal;
        }
      }
        this._total = novoTotal;
      }
  
    get total() {
      return this._total;
    }
    adicionarObserver(){
      
    }
  }

  export default ContadorPalavrasPares
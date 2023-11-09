class ContadorPalavrasComecadasComMaiusculas {
    constructor() {
      this.total = 0;
    }
  
    contar(palavra) {
      if (palavra[0].toUpperCase() === palavra[0]) {
        this.total++;
      }
    }
  
    get total() {
      return this.total;
    }
  }

  export default ContadorPalavrasComecadasComMaiusculas
class ContadorPalavrasPares {
    constructor() {
      this.total = 0;
    }
  
    contar(palavra) {
      if (palavra.length % 2 === 0) {
        this.total++;
      }
    }
  
    get total() {
      return this.total;
    }
  }

  export default ContadorPalavrasPares
class ContadorPalavras {
    constructor() {
      this.total = 0;
    }
  
    contar() {
      const novoTotal = this.total + 1;
      this.total = novoTotal;
    }
  
    get total() {
      return this.total;
    }

    set total(total) {
      this.total = total;
    }

  }
  export default ContadorPalavras
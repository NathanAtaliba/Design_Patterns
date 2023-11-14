import ContadorPalavrasObserver from "../contadores/contadorPalavrasObserver";

interface iObservador {

    update(contador : ContadorPalavrasObserver ): void;
    
  }

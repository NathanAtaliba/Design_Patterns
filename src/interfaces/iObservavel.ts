interface iObservavel {
  update(frase: number): void;

  registraObservador(obs: Observador): void;

	removeObservador(obs: observador): void;
  
	notificaObservadores(): void ;
  }
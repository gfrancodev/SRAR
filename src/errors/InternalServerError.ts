export class InternalServerError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'InternalServerError';
  }
}

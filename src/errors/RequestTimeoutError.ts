export class RequestTimeoutError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'RequestTimeoutError';
  }
}

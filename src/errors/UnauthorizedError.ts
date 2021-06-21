export class UnauthorizedError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'UnauthorizedError';
  }
}

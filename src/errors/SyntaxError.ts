export class SyntaxError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'SyntaxError';
  }
}

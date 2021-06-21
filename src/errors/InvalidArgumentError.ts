export class InvalidArgumentError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'InvalidArgumentError';
  }
}

export class ForbiddenError extends Error {
  constructor (mensagem) {
    super(mensagem)
    this.name = 'ForbiddenError'
  }
}

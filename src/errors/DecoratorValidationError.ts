export function DecoratorValidationError(args: any, status: number, message: string) {
  args[0].res.statusCode = status
  return args[0].res.json({ error: message })
}

import { DecoratorValidationError } from '../errors'

export function IsRequestArgumentsValid (keysValidisHere) {
  return (_target: any, _key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any) {
      const keys = keysValidisHere
      const keysValid = []

      Object.keys(args[0].body).forEach(key => {
        if (keys.filter(attr => attr.includes(key)).length > 0) return keysValid.push(key)
      })

      if (keysValid.length === 0) {
        return DecoratorValidationError(args, 400, 'Invalid Arguments.')
      }

      if (keysValid.length !== keys.length) {
        return DecoratorValidationError(args, 400, `Only the attribute(s) ${keysValid} were informed. Enter the missing attributes.`)
      }

      return originalMethod.apply(this, args)
    }

    return descriptor
  }
}

import { DecoratorValidationError } from "src/errors"

export function IsCreatingUserValid() {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value

    descriptor.value = (...args: any) => {
      const keys = ["name", "lastname", "username", "email", "password"]
      const keysValid = []

      Object.keys(args[0].body).forEach(key => {
        if (keys.filter(attr => attr.includes(key)).length > 0) return keysValid.push(key)
      })

      if (keysValid.length !== keys.length) {
        return DecoratorValidationError(args, 422, `Only the attribute(s) ${keysValid} were informed. Enter the missing attributes.`)
      }

      return originalMethod.apply(this, args)
    }

    return descriptor
  }
}



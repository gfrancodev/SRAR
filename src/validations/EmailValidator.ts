import { DecoratorValidationError } from "src/errors"

export function EmailValidator() {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value

    descriptor.value = (...args: any) => {
      const regexEmailValidation = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i

      if (!regexEmailValidation.test(args[0].body.email)) {
        return DecoratorValidationError(args, 422, "email is invalid")
      }

      return originalMethod.apply(this, args)
    }

    return descriptor
  }
}

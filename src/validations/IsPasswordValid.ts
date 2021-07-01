import { DecoratorValidationError } from 'src/errors'

export function IsPasswordValid () {
  return (_target: any, _key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: [any]) {
      const regexPasswordValidation = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,20}$/
      const password = args[0].body.password

      if (!regexPasswordValidation.test(password) || !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        return DecoratorValidationError(args, 422, 'Password is invalid')
      }

      return originalMethod.apply(this, args)
    }

    return descriptor
  }
}

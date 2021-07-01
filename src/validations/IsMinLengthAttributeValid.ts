import { DecoratorValidationError } from '../errors'

export function IsMinLengthAttributeValid (min: number) {
  return (_target: any, _key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: [any]) {
      const invalidAttributes = []
      Object.values(args[0].body).forEach((value, index) => {
        if (`${value}`.length < min) {
          invalidAttributes.push(Object.keys(args[0].body)[index])
        }
      })

      if (invalidAttributes.length >= 1) {
        return DecoratorValidationError(args, 422, `The attribute(s) ${invalidAttributes} has less than 3 digits`)
      }

      return originalMethod.apply(this, args)
    }

    return descriptor
  }
}

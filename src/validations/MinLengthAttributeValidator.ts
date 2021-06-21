import { DecoratorValidationError } from "src/errors"

export function MinLengthAttributeValidator(min: number){
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value

    descriptor.value = (...args: any) => {
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

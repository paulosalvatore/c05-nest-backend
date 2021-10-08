import { registerDecorator } from 'class-validator';
import { cpf } from 'cpf-cnpj-validator';

export function Cpf() {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'cpf',
      target: object.constructor,
      propertyName: propertyName,
      options: {
        message: 'CPF must be valid.',
      },
      validator: {
        validate(value: any) {
          return cpf.isValid(value);
        },
      },
    });
  };
}

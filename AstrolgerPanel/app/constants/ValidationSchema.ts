import * as Yup from 'yup';
import { ValidationStrings } from './Strings';
import { EmailRegEx, phoneRegExp } from './RegEx';

export const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email(ValidationStrings.invalidMail)
    .required(ValidationStrings.required)
    .matches(EmailRegEx, ValidationStrings.invalidMail),
  password: Yup.string()
    .required(ValidationStrings.required)
    .min(8, ValidationStrings.min),
});

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required(ValidationStrings.required),
  lastName: Yup.string().required(ValidationStrings.required),
  phone: Yup.string()
    .matches(phoneRegExp, ValidationStrings.phoneInvalid)
    .required(ValidationStrings.required),
  email: Yup.string()
    .email(ValidationStrings.invalidMail)
    .required(ValidationStrings.required)
    .matches(EmailRegEx, ValidationStrings.invalidMail),
  experience: Yup.number()
    .typeError(ValidationStrings.invalidExperience)
    .required(ValidationStrings.required)
    .min(0, ValidationStrings.negativeAmount),
  city: Yup.string().required(ValidationStrings.required),
  country: Yup.string().required(ValidationStrings.required),
  bio: Yup.string().required(ValidationStrings.required),
});

import * as Yup from 'yup';
import { EmailRegEx, phoneRegExp } from './RegEx';
import { ValidationStrings } from './Strings';

export const SigninSchema = Yup.object().shape({
  username: Yup.string()
    .email(ValidationStrings.invalidMail)
    .required(ValidationStrings.required)
    .matches(EmailRegEx, ValidationStrings.invalidMail),
  password: Yup.string()
    .required(ValidationStrings.required)
    .min(8, ValidationStrings.min),
});

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string().trim().required(ValidationStrings.required),
  lastName: Yup.string().trim().required(ValidationStrings.required),
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
    .min(0, ValidationStrings.negativeExperience),
  city: Yup.string().trim().required(ValidationStrings.required),
  country: Yup.string().trim().required(ValidationStrings.required),
  bio: Yup.string().trim().required(ValidationStrings.required),
});

export const RateSchmea = Yup.object().shape({
  rate: Yup.number()
    .typeError(ValidationStrings.invalidAmount)
    .required(ValidationStrings.required)
    .min(0, ValidationStrings.negativeRate),
  discount: Yup.number()
    .typeError(ValidationStrings.invalidExperience)
    .required(ValidationStrings.required)
    .min(0, ValidationStrings.negativeRate)
    .max(100, ValidationStrings.range),
});

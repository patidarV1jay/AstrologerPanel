export interface FormikProps {
  handleBlur: Function;
  handleChange: Function;
  values: { [key: string]: number };
  touched: { [key: string]: boolean };
  errors: { [key: string]: string };
  handleSubmit: Function;
}
export interface Props {
  isDropDown: boolean;
  isRateDropDown: string;
  toggleDropDown: (name: string) => void;
  dropDownName: string;
  privateCallRate: string;
  formik: FormikProps;
}

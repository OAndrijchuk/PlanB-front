import { FormProps } from '../components/Submit_form';

export const saveDataToLocal = (values: FormProps): void => {
  localStorage.setItem('formData', JSON.stringify(values));
};

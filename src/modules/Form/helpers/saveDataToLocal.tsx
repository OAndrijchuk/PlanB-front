import { FormProps } from '../Form';

export const saveDataToLocal = (values: FormProps): void => {
  localStorage.setItem('formData', JSON.stringify(values));
};

import { FormikHelpers } from 'formik';

export const handleSubmit = async (
  values: string,
  action: FormikHelpers<any>
) => {
  alert(JSON.stringify(values, null, 2));

  action.resetForm();
};

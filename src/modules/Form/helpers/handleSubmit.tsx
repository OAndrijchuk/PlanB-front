import { FormikHelpers } from 'formik';

export const handleSubmit = async (
  values: string,
  action: FormikHelpers<any>
) => {
  alert(JSON.stringify(values, null, 2));
  action.resetForm();
  // try {
  //   const endpoint = '';

  //   const response = await fetch(endpoint, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(values),
  //   });

  //   if (!response.ok) {
  //     throw new Error('Виникла проблема з вашим запитом');
  //   }

  //   const data = await response.json();

  //   console.log('Відповідь від сервера:', data);

  //   alert('Форма успішно відправлена!');
  //   alert(JSON.stringify(values, null, 2));
  //   action.resetForm();
  // } catch (error) {
  //   console.error('Помилка при надсиланні запиту:', error.message);
  // }
};

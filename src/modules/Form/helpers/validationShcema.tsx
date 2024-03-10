import { MAX, MIN } from '@/assets/consts/services';
import * as Yup from 'yup';

export const validationSchema = () => {
  return Yup.object({
    name: Yup.string()
      .trim()
      .matches(/^[a-zA-Zа-яА-ЯґҐєЄіІїЇ\s]*$/, `Введіть Ваше ім'я`)
      .min(MIN, `Ім'я повиннo бути не менше ${MIN} символів`)
      .max(MAX, `Ім'я повиннo бути не більше ${MAX} символів`)
      .required(`Ім'я обов'язкове до заповнення`),

    phone: Yup.string()
      .matches(/^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, `Невірний формат телефону`)
      .required(`Телефон обов'язковий до заповнення`),

    service: Yup.string().required('Оберіть процедуру'),
  });
};

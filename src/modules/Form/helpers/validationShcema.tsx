import { MAX, MIN } from '@/assets/consts/services';
import * as Yup from 'yup';

export const validationSchema = () => {
  return Yup.object({
    name: Yup.string()
      .matches(/^[a-zA-Zа-яА-ЯґҐєЄіІїЇ\s]*$/, `Введіть Ваше ім'я`)
      .min(MIN, `Ім'я повиннo бути не менше ${MIN} символів`)
      .max(MAX, `Ім'я повиннo бути не більше ${MIN} символів`)
      .required(`Ім'я обов'язкове до заповнення`),

    phone: Yup.string()
      .matches(/^\+380\d{9}$/, `Невірний формат телефону`)
      .required(`Телефон обов'язковий до заповнення`),

    service: Yup.string().required('Оберіть процедуру'),
  });
};

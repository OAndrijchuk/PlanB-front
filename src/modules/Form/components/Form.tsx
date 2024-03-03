'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { ELECTRO, LASER, SUGARING } from '@/assets/consts/services';
import { ButtonAppointment } from '@/components';
import { validationSchema } from '../helpers/validationShcema';
import { handleSubmit } from '../helpers/handleSubmit';

import Input from './Input';

export type FormProps = {
  name: string;
  phone: string;
  service: string;
};
const initialValues: FormProps = {
  name: '',
  phone: '',
  service: '',
};

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: FormProps, actions) => {
      handleSubmit;
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col justify-center min-w-[288px]"
    >
      <Input
        elementType="input"
        label="Ім'я"
        aria-label="Ваше ім'я"
        id="name"
        name="name"
        type="text"
        placeholder="Введіть ваше ім'я"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        error={formik.touched.name && formik.errors.name}
      />
      <Input
        elementType="input"
        label="Телефон"
        aria-label="Ваше телефон"
        id="phone"
        name="phone"
        type="tel"
        placeholder="+380"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
        error={formik.touched.phone && formik.errors.phone}
      />
      <Input
        elementType="select"
        label="Процедура"
        id="service"
        name="service"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.service}
        options={[
          { value: 'Laser_epilation', label: LASER },
          { value: 'Electroepilation', label: ELECTRO },
          { value: 'Sugaring', label: SUGARING },
        ]}
      />
      <ButtonAppointment type="submit">Відправити</ButtonAppointment>
    </form>
  );
};

export default Form;

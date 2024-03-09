'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { ELECTRO, LASER, SUGARING } from '@/assets/consts/services';
import { ButtonAppointment } from '@/components';
import { validationSchema } from '../helpers/validationShcema';
import { handleSubmit } from '../helpers/handleSubmit';

import Input from './Input';
import { formatPhoneNumber } from '../helpers/formatPhoneNumber';

type FormProps = {
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
  const handlePhoneChange = (e: { target: { value: string } }) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    formik.setFieldValue('phone', formattedPhoneNumber);
  };

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
        type="text"
        pattern="^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$"
        inputmode="tel"
        placeholder="+380"
        onChange={handlePhoneChange}
        onBlur={formik.handleBlur}
        // onInput={handlePhoneChange}
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
          { value: '', label: '' },
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

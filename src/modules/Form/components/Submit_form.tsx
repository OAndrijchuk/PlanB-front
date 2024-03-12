'use client';
import React, { useState } from 'react';

import { useFormik } from 'formik';
import { ELECTRO, LASER, SUGARING } from '@/assets/consts/services';
import { ButtonAppointment } from '@/components';

import {
  formatPhoneInput,
  handleSubmit,
  saveDataToLocal,
  validationSchema,
} from '../helpers';
import { InfinitySpin } from 'react-loader-spinner';
import { SelectWrapper, Input } from '.';

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

const getInitialValues = () => {
  const savedFormData = localStorage.getItem('formData');
  if (savedFormData) {
    return JSON.parse(savedFormData);
  }
  return initialValues;
};

export const Submit_form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      setIsLoading(true);
      await handleSubmit(values, actions);
      setIsLoading(false);
      localStorage.removeItem('formData');
    },
  });

  const handlePhoneChange = (e: { target: { value: string } }) => {
    const formattedPhoneNumber = formatPhoneInput(e.target.value);
    formik.setFieldValue('phone', formattedPhoneNumber);
    saveDataToLocal({
      ...formik.values,
      phone: formattedPhoneNumber,
    });
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col justify-center min-w-[288px]"
    >
      <Input
        label="Ім'я"
        aria-label="Ваше ім'я"
        id="name"
        name="name"
        type="text"
        inputmode="text"
        placeholder="Введіть ваше ім'я"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        error={formik.touched.name && formik.errors.name}
      />
      <Input
        label="Телефон"
        aria-label="Ваше телефон"
        id="phone"
        name="phone"
        type="text"
        inputmode="tel"
        //+38 (XXX) XXX-XX-XX
        // +38 (098) 999-99-99
        placeholder="+38 (0XX)"
        onChange={handlePhoneChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
        error={formik.touched.phone && formik.errors.phone}
      />
      <SelectWrapper
        value={formik.values.service}
        onChange={value => {
          formik.setFieldValue('service', value);
          saveDataToLocal({ ...formik.values, service: value });
        }}
        error={formik.touched.service && formik.errors.service}
      />

      {isLoading && (
        <div className="m-auto">
          <InfinitySpin
            visible={true}
            width="200"
            color="#FACFC2"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      )}
      <ButtonAppointment type="submit">Відправити</ButtonAppointment>
    </form>
  );
};

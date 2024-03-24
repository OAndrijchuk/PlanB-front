'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { InfinitySpin } from 'react-loader-spinner';

import {
  formatPhoneInput,
  handleSubmit,
  saveDataToLocal,
  validationSchema,
} from './helpers';

import { ButtonAppointment } from '@/components';
import { Input, SelectWrapper, Success_modal } from './components';

export interface FormProps {
  name?: string;
  phone?: string;
  service?: string;
}

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

const Form: React.FC<FormProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      setIsLoading(true);
      await handleSubmit(values, actions);
      setIsSuccess(true);
      setIsLoading(false);
      localStorage.removeItem('formData');
      setIsSuccess;
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
    <>
      {isSuccess && <Success_modal />}
      {!isSuccess && (
        <>
          <h2
            className="mb-10 sm:max-w-[175px] text-base
      md:max-w-[258px] md:text-2xl md:leading-7"
          >
            Залишайте свої контакти і ми з Вами зв&apos;яжемося
          </h2>
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
              error={
                formik.touched.name && formik.errors.name
                  ? String(formik.errors.name)
                  : undefined
              }
            />
            <Input
              label="Телефон"
              aria-label="Ваше телефон"
              id="phone"
              name="phone"
              type="text"
              inputmode="tel"
              // +38 (098) 999-99-99
              placeholder="+38 (0XX)"
              onChange={handlePhoneChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              error={
                formik.touched.phone && formik.errors.phone
                  ? String(formik.errors.phone)
                  : undefined
              }
            />
            <SelectWrapper
              value={formik.values.service}
              onChange={value => {
                formik.setFieldValue('service', value);
                saveDataToLocal({ ...formik.values, service: value });
              }}
              error={
                formik.touched.service && formik.errors.service
                  ? String(formik.errors.service)
                  : undefined
              }
            />

            {isLoading ? (
              <div className="m-auto">
                <InfinitySpin width="200" color="#FACFC2" />
              </div>
            ) : (
              <ButtonAppointment type="submit">Відправити</ButtonAppointment>
            )}
          </form>
        </>
      )}
    </>
  );
};

export default Form;

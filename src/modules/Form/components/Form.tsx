'use client';
import React from 'react';
import { useFormik } from 'formik';
import { ELECTRO, LASER, SUGARING } from '@/assets/consts/services';
import { ButtonAppointment } from '@/components';

type FormProps = {
  name: string;
  phone: string;
  service: string;
};

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      service: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col justify-center min-w-[288px]"
    >
      <label htmlFor="name" className="mb-[10px] text-base leading-none">
        Ім&apos;я
      </label>
      <input
        aria-label="Ваше ім'я"
        id="name"
        name="name"
        type="text"
        placeholder="Введіть ваше ім'я"
        onChange={formik.handleChange}
        value={formik.values.name}
        className="mb-4 py-[10px] pl-4 min-w-[288px] text-base font-medium text-stone-900 bg-stone-50 rounded-custom placeholder:text-neutral-400 
        md:min-w-[420px]"
      />

      <label htmlFor="phone" className="mb-[10px] text-base leading-none">
        Телефон
      </label>
      <input
        aria-label="Ваше телефон"
        id="phone"
        name="phone"
        type="tel"
        placeholder="+380"
        onChange={formik.handleChange}
        value={formik.values.phone}
        className="mb-4 py-[10px] pl-4 min-w-[288px] text-base font-medium text-stone-900 bg-stone-50 rounded-custom placeholder:text-neutral-400 
        md:min-w-[420px]"
      />
      <label htmlFor="service" className="mb-[10px] text-base leading-none">
        Процедура
      </label>
      <select
        id="service"
        name="service"
        className="mb-12 py-[10px] pl-4 min-w-[288px] text-base font-medium text-stone-900 bg-stone-50 rounded-custom placeholder:text-neutral-400 
        md:mb-16 md:min-w-[420px]"
      >
        <option value="Laser_epilation">{LASER}</option>
        <option value="Electroepilation">{ELECTRO}</option>
        <option value="Sugaring">{SUGARING}</option>
      </select>
      <ButtonAppointment type="submit">Відправити</ButtonAppointment>
    </form>
  );
};

export default Form;

import React, { ReactNode } from 'react';
import { Submit_form } from './components';

type FormProps = {
  children?: ReactNode;
};

const Form_Thumb: React.FC<FormProps> = () => {
  return (
    <>
      <h2
        className="mb-10 sm:max-w-[175px] text-base
      md:max-w-[258px] md:text-2xl md:leading-7"
      >
        Залишайте свої контакти і ми з Вами зв&apos;яжемося
      </h2>
      <Submit_form />
    </>
  );
};

export default Form_Thumb;

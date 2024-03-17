'use client';

import React, { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  'aria-label'?: string;
  id: string;
  label: string;
  name: string;
  type?: string;
  inputmode: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  autoComplete?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  name,
  type,
  inputMode,
  placeholder,
  onChange,
  onBlur,
  value,
  error,
}) => {
  return (
    <div className="flex flex-col justify-center min-w-[288px]">
      {error ? (
        <span
          className={`mb-[10px] text-base leading-none text-red-700 transition duration-300`}
        >
          {error}
        </span>
      ) : (
        <label
          htmlFor={id}
          className={twMerge(
            'mb-[10px] text-base leading-none',
            error ? 'text-red-700' : ''
          )}
        >
          {label}
        </label>
      )}

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        inputMode={inputMode}
        autoComplete="off"
        required
        className={twMerge(
          `mb-4 py-[10px] px-4 min-w-[288px] text-base font-medium text-stone-900 bg-stone-50 rounded-custom placeholder:text-neutral-400 outline-none
        md:min-w-[420px]`,
          error ? 'text-red-700 placeholder:text-red-700' : ''
        )}
      />
    </div>
  );
};
export default Input;

import React, { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  'aria-label'?: string;
  id: string;
  label: string;
  name: string;
  type?: string;
  elementType: 'input' | 'select';
  options?: Array<{ value: string; label: string }>;
  placeholder?: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  onBlur?: (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLSelectElement>
  ) => void;
  value: string;
  autoComplete?: string;
  error?: string | false | undefined;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  name,
  type = 'text',
  elementType = 'input',
  options,
  placeholder,
  onChange,
  onBlur,
  value,
  error,
  className,
}) => {
  return (
    <div className=" flex flex-col justify-center min-w-[288px]">
      {error ? (
        <span className={`mb-[10px] text-red-700 transition duration-300`}>
          {error}
        </span>
      ) : (
        <label
          htmlFor={id}
          className={twMerge(`mb-[10px] text-base leading-none
           ${error && 'text-red-700'}`)}
        >
          {label}
        </label>
      )}
      {elementType === 'input' ? (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          autoComplete="off"
          required
          className={twMerge(`mb-4 py-[10px] px-4 min-w-[288px] text-base font-medium text-stone-900 bg-stone-50 rounded-custom placeholder:text-neutral-400 outline-none
        md:min-w-[420px]
           ${error && 'text-red-700 placeholder:text-red-700'}`)}
        />
      ) : (
        <select
          id={id}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          required
          className={twMerge(`mb-4 py-[10px] px-4 min-w-[288px] text-base font-medium text-stone-900 bg-stone-50 rounded-custom placeholder:text-neutral-400 outline-none
        md:min-w-[420px]
           ${error && 'text-red-700 '}`)}
        >
          {options?.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Input;

'use client';
import { ELECTRO, LASER, SUGARING } from '@/assets/consts/services';
import { SpriteSVG } from '@/assets/img/SpriteSVG';
import React, { useState } from 'react';
import Select from 'react-select';
import { twMerge } from 'tailwind-merge';

interface SelectWrapperProps {
  value: string;
  onChange: (value: string) => void;
  error?: unknown;
}

const options = [
  { value: `${LASER}`, label: LASER },
  { value: `${ELECTRO}`, label: ELECTRO },
  { value: `${SUGARING}`, label: SUGARING },
];

export const SelectWrapper: React.FC<SelectWrapperProps> = ({
  value,
  onChange,
  error,
}) => {
  return (
    <>
      {error ? (
        <span
          className={`mb-[10px] text-base leading-none text-red-700 transition duration-300`}
        >
          {error}
        </span>
      ) : (
        <label
          htmlFor="service"
          className={twMerge(
            'mb-[10px] text-base leading-none',
            error ? 'text-red-700' : ''
          )}
        >
          Процедура
        </label>
      )}
      <Select
        value={options.find(option => option.value === value)}
        onChange={selectedOption => onChange(selectedOption?.value || '')}
        options={options}
        unstyled={true}
        aria-label="Оберіть послугу"
        id="service"
        placeholder=""
        classNames={{
          control: state =>
            twMerge(
              `mb-12  px-4 py-[10px] min-w-[288px] text-base font-medium text-stone-900 bg-stone-50 rounded-custom placeholder:text-neutral-400 outline-none cursor-pointer
            md:min-w-[420px]`,
              state.isFocused ? 'border-red-600' : 'border-grey-300'
            ),
          option: state =>
            twMerge(
              'max-w-[219px] px-4 py-[10px] text-base font-medium bg-stone-50 rounded-custom cursor-pointer',
              state.isSelected
                ? 'rounded-custom text-stone-900 bg-stone-200'
                : 'text-stone-900 bg-stone-50'
            ),
          singleValue: () => 'text-stone-900',
          input: () => 'm-0 p-0 cursor-pointer',
          menu: () =>
            'top-[56px] right-0 max-w-[219px] m-0 bg-stone-50 rounded-custom ',
          menuList: () => 'max-w-[219px] p-0 rounded-custom ',
          dropdownIndicator: state =>
            twMerge(
              'text-stone-900 cursor-pointer',
              error ? 'text-red-700' : '',
              state.isFocused ? 'rotate-180' : 'rotate-0'
            ),
          // indicatorsContainer: () => 'w-6 h-6',
        }}
        classNamePrefix="react-select"
      />
    </>
  );
};

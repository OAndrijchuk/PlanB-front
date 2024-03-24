export const formatPhoneInput = (value: string): string => {
  const prefix = '+38 (0';

  if (!value.startsWith(prefix)) {
    return `${prefix}`;
  }

  const phoneNumber = value.slice(6).replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 3) {
    return `${prefix}${phoneNumber}`;
  }
  if (phoneNumberLength < 6) {
    return `${prefix}${phoneNumber.slice(0, 2)}${
      phoneNumberLength > 2 ? `) ${phoneNumber.slice(2)}` : ''
    }`;
  }
  if (phoneNumberLength < 8) {
    return `${prefix}${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
      2,
      5
    )}-${phoneNumber.slice(5)}`;
  }
  return `${prefix}${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
    2,
    5
  )}-${phoneNumber.slice(5, 7)}-${phoneNumber.slice(7, 9)}`;
};

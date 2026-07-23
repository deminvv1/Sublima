export function isValidName(value: string): boolean {
  return value.trim().length >= 2;
}

export const PHONE_MAX_DIGITS = 11;

export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= PHONE_MAX_DIGITS;
}

/** Strips disallowed characters and caps the digit count while typing. */
export function sanitizePhoneInput(value: string): string {
  let digitCount = 0;
  let result = "";
  for (const char of value) {
    if (/\d/.test(char)) {
      if (digitCount >= PHONE_MAX_DIGITS) continue;
      digitCount++;
      result += char;
    } else if (/[\s+\-()]/.test(char)) {
      result += char;
    }
  }
  return result;
}

export function isValidEmail(value: string): boolean {
  if (!value.trim()) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export const ERROR_MESSAGES = {
  name: "Введите имя",
  phoneRequired: "Введите номер телефона",
  phoneInvalid: "Проверьте номер телефона",
  emailInvalid: "Проверьте адрес email",
};

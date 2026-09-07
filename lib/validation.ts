export function isValidName(value: string): boolean {
  return value.trim().length >= 2;
}

export const PHONE_MAX_DIGITS = 11;

export function isValidPhone(value: string): boolean {
  if (!value.trim().startsWith("+")) return false;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= PHONE_MAX_DIGITS;
}

/**
 * Strips disallowed characters and caps the digit count while typing.
 * The leading "+7" country code is treated as a fixed prefix: deleting just
 * the "7" (or the whole thing down to a bare "+") snaps it back, so the
 * field can only ever be fully emptied (e.g. select-all + delete), never
 * left starting with anything else.
 */
export function sanitizePhoneInput(value: string): string {
  let digitCount = 0;
  let result = "";
  for (const char of value) {
    if (/\d/.test(char)) {
      if (digitCount >= PHONE_MAX_DIGITS) continue;
      digitCount++;
      result += char;
    } else if (/[\s\-()]/.test(char)) {
      result += char;
    } else if (char === "+" && result.length === 0) {
      result += char;
    }
  }
  if (result.length === 0) return result;
  const digits = result.replace(/\D/g, "");
  if (!digits.startsWith("7")) {
    result = `+7${result.replace(/^\+/, "")}`;
  } else if (!result.startsWith("+")) {
    result = `+${result}`;
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

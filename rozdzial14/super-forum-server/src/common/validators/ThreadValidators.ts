export const isThreadTitleValid = (title: string) => {
  return isStringValid("Title", title, 5, 150);
};

export const isThreadBodyValid = (body: string) => {
  return isStringValid("Body", body, 10, 2500);
};

export const isStringValid = (
  label: string,
  str: string,
  min: number,
  max: number
) => {
  if (!str) return `Pole ${label} nie może być puste.`;
  if (str.length < 5) {
    return `Pole ${label} musi zawierać co najmniej ${min} znaków.`;
  }
  if (str.length > 150) {
    return `Pole ${label} nie może zawierać więcej niż ${max} znaków.`;
  }
  return "";
};

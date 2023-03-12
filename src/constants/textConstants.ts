export const tableHeaderTexts = [
  "S/N",
  "First Name",
  "Last Name",
  "Country",
  "Phone",
  "Email",
  "City",
];

export function getInputFieldNames() {
  const inputFieldNames = [...tableHeaderTexts];
  inputFieldNames.shift();
  return { inputFieldNames };
}

export const tableHeaderTexts = [
  "S/N",
  "FirstName",
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

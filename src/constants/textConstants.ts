export const TABLE_HEADER_TEXTS = [
  "S/N",
  "First Name",
  "Last Name",
  "Country",
  "Phone",
  "Email",
  "City",
];

export function getInputFieldNames() {
  const inputFieldNames = TABLE_HEADER_TEXTS.slice(1);
  return { inputFieldNames };
}

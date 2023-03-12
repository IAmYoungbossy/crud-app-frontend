export interface Icontact {
  id?: number;
  City: string;
  Phone: string;
  Email: string;
  Country: string;
  "Last Name": string;
  "First Name": string;
}

export interface IHandkeChange {
  inputField: string;
  e: React.ChangeEvent<HTMLInputElement>;
}

export interface PageProps {
  children: React.ReactNode;
}

// export interface IInputFieldTypes {
//   City: string;
//   Phone: string;
//   Email: string;
//   Country: string;
//   "Last Name": string;
//   "First Name": string;
// }

export interface IActionType {
  type: string;
  payload: string;
}

export const INPUT_FIELD_TYPES = {
  City: "CITY",
  Phone: "PHONE",
  Email: "EMAIL",
  Country: "COUNTRY",
  "Last Name": "LAST NAME",
  "First Name": "FIRST NAME",
};

export interface Icontact {
  id?: number;
  City: string;
  Phone: string;
  Email: string;
  Country: string;
  "Last Name": string;
  "First Name": string;
}

export type inputFieldType =
  | "City"
  | "Email"
  | "Phone"
  | "Country"
  | "Last Name"
  | "First Name";

export interface IHandleChange {
  inputField: string;
  e: React.ChangeEvent<HTMLInputElement>;
}

export interface IcontactForm {
  editContactId: number | null;
}

export type contactFormType = "add contact" | "edit contact";

export interface IcontactTable {
  setEditContactId: React.Dispatch<React.SetStateAction<number | null>>;
}

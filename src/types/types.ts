import { setContactsType } from "../helpers/actionMethods";

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

export interface IHandkeChange {
  inputField: string;
  e: React.ChangeEvent<HTMLInputElement>;
}

export interface PageProps {
  children: React.ReactNode;
}

export interface IcontactForm {
  editContactId: number | null;
}

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

export const initialContactState = {
  City: "",
  Phone: "",
  Email: "",
  Country: "",
  "Last Name": "",
  "First Name": "",
};

export type contactFormType = "add contact" | "edit contact";

export interface IcontactTable {
  setEditContactId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const API_ACTION_TYPES = {
  EDIT_CONTACT: "EDIT CONTACT",
  CREATE_CONTACT: "CREATE CONTACT",
  DELETE_CONTACT: "DELETE CONTACT",
  GET_ALL_CONTACTS: "GET ALL CONTACTS",
};

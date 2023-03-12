export interface Icontact {
  id: number;
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

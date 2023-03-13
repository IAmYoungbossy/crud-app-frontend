import { Icontact } from "../types/types";
import contactApi from "../api/contactApi";

// Type for setState hook that accepts an array or Icontact[]
export type setContactsType = React.Dispatch<
  React.SetStateAction<[] | Icontact[]>
>;

// Function to get all contacts from the backend API
export const getContacts = async () => {
  const response = await contactApi.get("contacts");
  const responseData = response.data as Icontact[];
  return responseData;
};

// Interface for the parameters of the addContact function
interface IAddContact {
  contactForm?: Icontact;
  contacts: Icontact[];
}

// Function to add a new contact to the backend API and the local contacts state
export const addContact = async ({ contacts, contactForm }: IAddContact) => {
  const newContact = (
    await contactApi.post("/contacts/create", {
      ...contactForm,
    })
  ).data as Icontact;
  return [...contacts, newContact];
};

// Interface for the parameters of the deleteContact function
interface IDeleteContact {
  id: number;
  contacts: Icontact[];
}

// Function to delete a contact from the backend API and the local contacts state
export const deleteContact = async ({ id, contacts }: IDeleteContact) => {
  await contactApi.delete(`contacts/${id}/delete`);
  const updatedContacts = contacts.filter((contact) => contact.id !== id);
  return updatedContacts;
};

// Interface for the parameters of the editContact function
interface IEditContact {
  id: number;
  contacts: Icontact[];
  contactForm: Icontact;
}

// Function to edit a contact in the backend API and the local contacts state
export const editContact = async ({
  id,
  contacts,
  contactForm,
}: IEditContact) => {
  await contactApi.put(`contacts/${id}/update`, contactForm);
  const editedContact = contacts.filter((contact) => contact.id === id)[0];
  const index = contacts.indexOf(editedContact);
  const contactCopy = [...contacts];
  const inputFieldObjCopy = { ...contactForm };
  inputFieldObjCopy.id = id;
  contactCopy[index] = inputFieldObjCopy;
  return contactCopy;
};

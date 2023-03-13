import { Icontact } from "../types/types";
import contactApi from "../api/contactApi";

export type setContactsType = React.Dispatch<
  React.SetStateAction<[] | Icontact[]>
>;

export const getContacts = async () => {
  const response = await contactApi.get("contacts");
  const responseData = response.data as Icontact[];
  return responseData;
};

interface IAddContact {
  contactForm?: Icontact;
  contacts: Icontact[];
}

export const addContact = async ({ contacts, contactForm }: IAddContact) => {
  const newContact = (
    await contactApi.post("/contacts/create", {
      ...contactForm,
    })
  ).data as Icontact;
  return [...contacts, newContact];
};

interface IDeleteContact {
  id: number;
  contacts: Icontact[];
}

export const deleteContact = async ({ id, contacts }: IDeleteContact) => {
  await contactApi.delete(`contacts/${id}/delete`);
  const updatedContacts = contacts.filter((contact) => contact.id !== id);
  return updatedContacts;
};

interface IEditContact {
  id: number;
  contacts: Icontact[];
  contactForm: Icontact;
}

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

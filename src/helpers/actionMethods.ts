import { Icontact } from "../types/types";
import contactApi from "../api/contactApi";

type setContactsType = React.Dispatch<React.SetStateAction<[] | Icontact[]>>;

export const getContacts = async (setContacts: setContactsType) => {
  const response = await contactApi.get("contacts");
  const responseData = response.data as Icontact[];
  setContacts(responseData);
  console.log(responseData);
};

interface IAddContact {
  inputFieldObj: Icontact;
  setContacts: setContactsType;
  contacts: Icontact[];
}

export const addContact = async ({
  setContacts,
  contacts,
  inputFieldObj,
}: IAddContact) => {
  const newContact = (
    await contactApi.post("/contacts/create", {
      ...inputFieldObj,
    })
  ).data as Icontact;
  setContacts([...contacts, newContact]);
};

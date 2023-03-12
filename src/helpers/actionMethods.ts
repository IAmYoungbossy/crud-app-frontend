import { Icontact } from "../types/types";
import contactApi from "../api/contactApi";

type setContactsType = React.Dispatch<React.SetStateAction<[] | Icontact[]>>;

export const getContacts = async (setContacts: setContactsType) => {
  const response = await contactApi.get("contacts");
  const responseData = response.data as Icontact[];
  setContacts(responseData);
  console.log(responseData);
};

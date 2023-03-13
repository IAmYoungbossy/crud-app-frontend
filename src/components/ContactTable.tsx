import { setContact } from "../features/contactSlice";
import { deleteContact } from "../helpers/actionMethods";
import { setFormModal } from "../features/formModalSlice";
import { tableHeaderTexts } from "../constants/textConstants";
import { setContactFormType } from "../features/formTypeSlice";
import { useAppDispatch, useAppSelector } from "../reuduxStore/store";
import { setEditContactId } from "../features/editContactIdSlice";

export default function ContactTable() {
  const dispatch = useAppDispatch();
  const { contacts } = useAppSelector((state) => state.contacts);

  return (
    <table>
      <thead>
        <tr>
          {tableHeaderTexts.map((headerText, index) => (
            <th key={index}>{headerText}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={contact.id}>
            <td>{index + 1}</td>
            <td>{contact["First Name"]}</td>
            <td>{contact["Last Name"]}</td>
            <td>{contact["Country"]}</td>
            <td>{contact["Phone"]}</td>
            <td>{contact["Email"]}</td>
            <td>
              {contact["City"]}
              <div>
                <button
                  onClick={() => {
                    (async () => {
                      const id = contact.id as number;
                      const contactObj = { contacts, id };
                      const updatedList = await deleteContact(contactObj);
                      const newContactArr = setContact(updatedList);
                      dispatch(newContactArr);
                    })();
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    dispatch(setFormModal(true));
                    dispatch(setContactFormType("edit contact"));
                    dispatch(setEditContactId(contact.id as number));
                  }}
                >
                  Edit
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

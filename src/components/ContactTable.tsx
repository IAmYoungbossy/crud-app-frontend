import { Icontact } from "../types/types";
import { tableHeaderTexts } from "../constants/textConstants";
import { deleteContact, setContactsType } from "../helpers/actionMethods";

export default function ContactTable({
  contacts,
  setContacts,
}: {
  contacts: Icontact[];
  setContacts: setContactsType;
}) {
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
                    deleteContact({
                      contacts,
                      setContacts,
                      id: contact.id as number,
                    });
                  }}
                >
                  Delete
                </button>
                <button>Edit</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

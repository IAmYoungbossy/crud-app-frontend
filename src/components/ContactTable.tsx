import { tableHeaderTexts } from "../constants/textConstants";
import { Icontact } from "../types/types";

export default function ContactTable({ contacts }: { contacts: Icontact[] }) {
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
            <td>{contact["City"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

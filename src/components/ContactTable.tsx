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
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.country}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td>{contact.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

import { Icontact } from "../types/types";

export default function ContactTable({ contacts }: { contacts: Icontact[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>S/N</th>
          <th>FirstName</th>
          <th>Last Name</th>
          <th>Country</th>
          <th>Phone</th>
          <th>Email</th>
          <th>City</th>
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

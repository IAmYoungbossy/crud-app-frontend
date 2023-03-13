import { Icontact } from "../types/types";

interface ContactRowProps {
  index: number;
  contact: Icontact;
  onDelete: () => void;
  onEdit: () => void;
}

export function ContactRow({
  index,
  onEdit,
  contact,
  onDelete,
}: ContactRowProps) {
  return (
    <tr>
      <td>{index}</td>
      <td>{contact["First Name"]}</td>
      <td>{contact["Last Name"]}</td>
      <td>{contact["Country"]}</td>
      <td>{contact["Phone"]}</td>
      <td>{contact["Email"]}</td>
      <td>
        {contact["City"]}
        <div>
          <button onClick={onDelete}>Delete</button>
          <button onClick={onEdit}>Edit</button>
        </div>
      </td>
    </tr>
  );
}

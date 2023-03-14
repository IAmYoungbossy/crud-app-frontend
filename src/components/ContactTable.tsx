import { ContactRow } from "./ContactRow";
import { Icontact } from "../types/types";
import { setContact } from "../features/contactSlice";
import { deleteContact } from "../helpers/actionMethods";
import { setFormModal } from "../features/formModalSlice";
import { StyledContactTable, StyledTableContainer } from "./StyledContactTable";
import { setContactForm } from "../features/contactFormSlice";
import { setContactFormType } from "../features/formTypeSlice";
import { TABLE_HEADER_TEXTS } from "../constants/textConstants";
import { setEditContactId } from "../features/editContactIdSlice";
import { useAppDispatch, useAppSelector } from "../reduxStore/store";

export default function ContactTable() {
  const dispatch = useAppDispatch();
  const { contacts } = useAppSelector((state) => state.contacts);

  // Function to handle contact deletion
  const handleDelete = async (id: number) => {
    const contactObj = { contacts, id };
    const updatedList = await deleteContact(contactObj);
    const newContactArr = setContact(updatedList);
    dispatch(newContactArr);
  };

  // Function to handle contact editing
  const handleEdit = (contact: Icontact) => {
    dispatch(setFormModal(true));
    dispatch(setContactForm({ ...contact }));
    dispatch(setContactFormType("edit contact"));
    dispatch(setEditContactId(contact.id as number));
  };

  return (
    <StyledTableContainer>
      <StyledContactTable>
        <thead>
          <tr>
            {TABLE_HEADER_TEXTS.map((headerText, index) => (
              <th key={index}>{headerText}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <ContactRow
              key={contact.id}
              index={index + 1}
              contact={contact}
              onDelete={() => handleDelete(contact.id as number)}
              onEdit={() => handleEdit(contact)}
            />
          ))}
        </tbody>
      </StyledContactTable>
    </StyledTableContainer>
  );
}

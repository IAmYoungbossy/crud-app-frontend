import { setContact } from "../features/contactSlice";
import { setFormModal } from "../features/formModalSlice";
import { inputObject } from "../constants/objectConstant";
import { setContactForm } from "../features/contactFormSlice";
import { IHandleChange, inputFieldType } from "../types/types";
import { getInputFieldNames } from "../constants/textConstants";
import { addContact, editContact } from "../helpers/actionMethods";
import { useAppDispatch, useAppSelector } from "../reduxStore/store";

export default function ContactForm() {
  const dispatch = useAppDispatch();
  const { contacts } = useAppSelector((state) => state.contacts);
  const { contactForm } = useAppSelector((state) => state.contactFormObj);
  const { editContactId } = useAppSelector((state) => state.editContactId);
  const { contactFormType } = useAppSelector((state) => state.contactFormType);

  const handleChange = ({ inputField, e }: IHandleChange) => {
    const updatedContactForm = { ...contactForm, [inputField]: e.target.value };
    dispatch(setContactForm(updatedContactForm));
  };

  const { inputFieldNames } = getInputFieldNames();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (contactFormType === "add contact") {
      const updatedContacts = await addContact({ contacts, contactForm });
      dispatch(setContact(updatedContacts));
      dispatch(setContactForm(inputObject));
    }
    if (contactFormType === "edit contact") {
      const updatedContacts = await editContact({
        contacts,
        contactForm,
        id: editContactId as number,
      });
      dispatch(setContact(updatedContacts));
      dispatch(setContactForm(inputObject));
    }
    dispatch(setFormModal(false));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {inputFieldNames.map((inputField, index) => {
        const value = inputField as inputFieldType;
        return (
          <div key={index}>
            <label htmlFor={inputField}>{inputField}:</label>
            <input
              type="text"
              id={inputField}
              name={inputField}
              placeholder={inputField}
              value={contactForm[value]}
              onChange={(e) => handleChange({ inputField, e })}
            />
          </div>
        );
      })}
      <button>
        {contactFormType === "add contact" ? "Add Contact" : "Edit Contact"}
      </button>
    </form>
  );
}

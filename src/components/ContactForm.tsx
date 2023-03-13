import { setContact } from "../features/contactSlice";
import { setFormModal } from "../features/formModalSlice";
import { inputObject } from "../constants/objectConstant";
import { setContactForm } from "../features/contactFormSlice";
import { IHandleChange, inputFieldType } from "../types/types";
import { getInputFieldNames } from "../constants/textConstants";
import { addContact, editContact } from "../helpers/actionMethods";
import { useAppDispatch, useAppSelector } from "../reuduxStore/store";

export default function ContactForm() {
  const dispatch = useAppDispatch();
  const { contacts } = useAppSelector((state) => state.contacts);
  const { contactForm } = useAppSelector((state) => state.contactFormObj);
  const { editContactId } = useAppSelector((state) => state.editContactId);
  const { contactFormType } = useAppSelector((state) => state.contactFormType);

  const handleChange = ({ inputField, e }: IHandleChange) => {
    const inputFieldCopy = { ...contactForm, [inputField]: e.target.value };
    dispatch(setContactForm(inputFieldCopy));
  };

  const { inputFieldNames } = getInputFieldNames();
  return (
    <form>
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
      <button
        onClick={(e) => {
          (async () => {
            e.preventDefault();
            if (contactFormType === "add contact") {
              dispatch(setContact(await addContact({ contacts, contactForm })));
              dispatch(setContactForm(inputObject));
            }
            if (contactFormType === "edit contact") {
              dispatch(
                setContact(
                  await editContact({
                    contacts,
                    contactForm,
                    id: editContactId as number,
                  })
                )
              );
              dispatch(setContactForm(inputObject));
            }
            dispatch(setFormModal(false));
          })();
        }}
      >
        {contactFormType === "add contact" ? "Add Contact" : "Edit contact"}
      </button>
    </form>
  );
}

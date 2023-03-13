import { useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";
import { setContact } from "../features/contactSlice";
import { getContacts } from "../helpers/actionMethods";
import { setFormModal } from "../features/formModalSlice";
import { setContactFormType } from "../features/formTypeSlice";
import { useAppDispatch, useAppSelector } from "../reduxStore/store";

function App() {
  const dispatch = useAppDispatch();
  const { showFormModal } = useAppSelector((state) => state.formModal);

  useEffect(() => {
    const fetchContacts = async () => {
      const contacts = await getContacts();
      dispatch(setContact(contacts));
    };
    fetchContacts();
  }, [dispatch]);

  const handleAddContactClick = () => {
    dispatch(setFormModal(true));
    dispatch(setContactFormType("add contact"));
  };

  return (
    <div>
      <button onClick={handleAddContactClick}>Add Contact</button>
      <ContactTable />
      {showFormModal && <ContactForm />}
    </div>
  );
}

export default App;

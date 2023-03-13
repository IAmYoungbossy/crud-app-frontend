import { useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";
import { setContact } from "../features/contactSlice";
import { getContacts } from "../helpers/actionMethods";
import { setFormModal } from "../features/formModalSlice";
import { setContactFormType } from "../features/formTypeSlice";
import { useAppDispatch, useAppSelector } from "../reuduxStore/store";

function App() {
  const handleClick = () => {
    dispatch(setFormModal(true));
    dispatch(setContactFormType("add contact"));
  };
  const dispatch = useAppDispatch();
  const { showFormModal } = useAppSelector((state) => state.formModal);

  useEffect(() => {
    (async () => dispatch(setContact(await getContacts())))();
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Add</button>
      <ContactTable />
      {showFormModal && <ContactForm />}
    </div>
  );
}

export default App;

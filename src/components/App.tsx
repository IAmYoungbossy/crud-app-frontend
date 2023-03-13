import { useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";
import { setContact } from "../features/contactSlice";
import { getContacts } from "../helpers/actionMethods";
import { useAppDispatch, useAppSelector } from "../reduxStore/store";
import Header from "./Header";
import { StyledApp } from "./StyledApp";

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

  return (
    <StyledApp>
      <Header />
      <div>
        <ContactTable />
        {showFormModal && <ContactForm />}
      </div>
    </StyledApp>
  );
}

export default App;

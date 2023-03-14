import Header from "./Header";
import { useEffect } from "react";
import ContactForm from "./ContactForm";
import { StyledApp } from "./StyledApp";
import ContactTable from "./ContactTable";
import { ShowModalPopUp } from "./ShowModalPopUp";
import { setContact } from "../features/contactSlice";
import { getContacts } from "../helpers/actionMethods";
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

  return (
    <StyledApp>
      <Header />
      <div>
        <h2>ShortListed Candidates</h2>
        <ContactTable />
        {showFormModal && (
          <ShowModalPopUp>
            <ContactForm />
          </ShowModalPopUp>
        )}
      </div>
    </StyledApp>
  );
}

export default App;

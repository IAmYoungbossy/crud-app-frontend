import { Icontact } from "../types/types";
import ContactTable from "./ContactTable";
import { useEffect, useState } from "react";
import { getContacts } from "../helpers/actionMethods";
import ContactForm from "./ContactForm";

function App() {
  const [contacts, setContacts] = useState<Icontact[] | []>([]);
  useEffect(() => {
    (async () => await getContacts(setContacts))();
  }, []);

  return (
    <div>
      <>
        <button>Add</button>
        {ContactTable({ contacts, setContacts })}
        <ContactForm setContacts={setContacts} contacts={contacts} />
      </>
    </div>
  );
}

export default App;

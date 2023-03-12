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
        {ContactTable({ contacts })}
        <ContactForm />
      </>
    </div>
  );
}

export default App;

import { Icontact } from "../types/types";
import ContactTable from "./ContactTable";
import { Fragment, useEffect, useState } from "react";
import { getContacts } from "../helpers/actionMethods";

function App() {
  const [contacts, setContacts] = useState<Icontact[] | []>([]);
  useEffect(() => {
    (async () => await getContacts(setContacts))();
  }, []);

  return <div>{ContactTable({ contacts })}</div>;
}

export default App;

import { useEffect, useState } from "react";
import { getContacts } from "../helpers/actionMethods";
import { Icontact } from "../types/types";

function App() {
  const [contacts, setContacts] = useState<Icontact[] | []>([]);
  useEffect(() => {
    (async () => await getContacts(setContacts))();
  }, []);

  return <div></div>;
}

export default App;

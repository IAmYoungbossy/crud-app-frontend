import { useEffect } from "react";
import ContactAPI from "../api/contactApi";

function App() {
  useEffect(() => {
    (async () => {
      const resp = await ContactAPI.getAll();
      console.log(resp);
    })();
  });
  return <div></div>;
}

export default App;

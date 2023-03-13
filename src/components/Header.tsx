import { StyledHeader } from "./StyledHeader";
import { useAppDispatch } from "../reduxStore/store";
import { setFormModal } from "../features/formModalSlice";
import { setContactFormType } from "../features/formTypeSlice";

export default function Header() {
  const dispatch = useAppDispatch();

  const handleAddContactClick = () => {
    dispatch(setFormModal(true));
    dispatch(setContactFormType("add contact"));
  };

  return (
    <StyledHeader>
      <div>
        <h1>Contacts Table</h1>
        <button onClick={handleAddContactClick}>Add Contact</button>
      </div>
    </StyledHeader>
  );
}

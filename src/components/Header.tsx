import { StyledHeader } from "./StyledHeader";
import { useAppDispatch } from "../reduxStore/store";
import { setFormModal } from "../features/formModalSlice";
import ChamsMobileLogo from "../assets/chams-main-logo.png";
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
        <img src={ChamsMobileLogo} alt="Chams Mobile Logo" />
        <button onClick={handleAddContactClick}>Add Contact</button>
      </div>
    </StyledHeader>
  );
}

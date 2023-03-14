import { useAppDispatch } from "../reduxStore/store";
import { setFormModal } from "../features/formModalSlice";
import { StyledModalPopUp } from "./StyledShowModalPopUp";

export const ShowModalPopUp = ({ children }: { children: JSX.Element }) => {
  const dispatch = useAppDispatch();
  const handleModalPopUp = () => dispatch(setFormModal(false));

  return (
    <StyledModalPopUp onClick={handleModalPopUp}>{children}</StyledModalPopUp>
  );
};

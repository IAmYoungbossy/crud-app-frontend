import { createSlice } from "@reduxjs/toolkit";
import { inputObject } from "../constants/objectConstant";
import { Icontact } from "../types/types";

interface IContactFormState {
  contactForm: Icontact;
}

const initialState: IContactFormState = {
  contactForm: inputObject,
};

interface IContactFormActionType {
  type: string;
  payload: Icontact;
}

const contactFormSlice = createSlice({
  name: "showFormModal",
  initialState,
  reducers: {
    setContactForm: (state, actions: IContactFormActionType) => {
      state.contactForm = actions.payload;
    },
  },
});

export const { setContactForm } = contactFormSlice.actions;
export default contactFormSlice.reducer;

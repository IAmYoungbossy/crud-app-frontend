import { Icontact } from "../types/types";
import { inputObject } from "../constants/objectConstant";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IContactFormState {
  contactForm: Icontact;
}

const initialState: IContactFormState = {
  contactForm: inputObject,
};

interface ISetContactFormAction extends PayloadAction<Icontact> {}

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  reducers: {
    setContactForm: (state, action: ISetContactFormAction) => {
      state.contactForm = action.payload;
    },
  },
});

export const { setContactForm } = contactFormSlice.actions;
export default contactFormSlice.reducer;

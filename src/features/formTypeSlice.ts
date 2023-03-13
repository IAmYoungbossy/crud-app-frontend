import { createSlice } from "@reduxjs/toolkit";

interface IFormTypeState {
  contactFormType: "add contact" | "edit contact";
}

const initialState: IFormTypeState = {
  contactFormType: "add contact",
};

interface IFormTypeActionType {
  type: string;
  payload: "add contact" | "edit contact";
}

const contactFormTypeSlice = createSlice({
  name: "contactFormType",
  initialState,
  reducers: {
    setContactFormType: (state, actions: IFormTypeActionType) => {
      state.contactFormType = actions.payload;
    },
  },
});

export const { setContactFormType } = contactFormTypeSlice.actions;
export default contactFormTypeSlice.reducer;

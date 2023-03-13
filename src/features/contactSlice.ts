import { Icontact } from "../types/types";
import { createSlice } from "@reduxjs/toolkit";

interface IcontactState {
  contacts: Icontact[];
}

const initialState: IcontactState = {
  contacts: [],
};

interface IContactActionType {
  payload: Icontact[];
  type: string;
}

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContact: (state, actions: IContactActionType) => {
      state.contacts = actions.payload;
    },
  },
});

export const { setContact } = contactSlice.actions;
export default contactSlice.reducer;

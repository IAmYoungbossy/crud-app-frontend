import { Icontact } from "../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IContactState {
  contacts: Icontact[];
}

const initialState: IContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContact: (state, action: PayloadAction<Icontact[]>) => {
      state.contacts = action.payload;
    },
  },
});

export const { setContact } = contactSlice.actions;
export default contactSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface IEditContactIdState {
  editContactId: number | null;
}

const initialState: IEditContactIdState = {
  editContactId: null,
};

interface IEditContactIdActionType {
  type: string;
  payload: number;
}

const EditContactIdSlice = createSlice({
  name: "editConatact",
  initialState,
  reducers: {
    setEditContactId: (state, actions: IEditContactIdActionType) => {
      state.editContactId = actions.payload;
    },
  },
});

export const { setEditContactId } = EditContactIdSlice.actions;
export default EditContactIdSlice.reducer;

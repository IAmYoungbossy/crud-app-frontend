import { createSlice } from "@reduxjs/toolkit";

interface IcontactState {
  showFormModal: boolean;
}

const initialState: IcontactState = {
  showFormModal: false,
};

interface IFormModalActionType {
  payload: boolean;
  type: string;
}

const formModalSlice = createSlice({
  name: "showFormModal",
  initialState,
  reducers: {
    setFormModal: (state, actions: IFormModalActionType) => {
      state.showFormModal = actions.payload;
    },
  },
});

export const { setFormModal } = formModalSlice.actions;
export default formModalSlice.reducer;

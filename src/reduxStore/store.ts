import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/contactSlice";
import FormTypeReducer from "../features/formTypeSlice";
import formModalReducer from "../features/formModalSlice";
import contactFormReducer from "../features/contactFormSlice";
import editContactIdReducer from "../features/editContactIdSlice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    formModal: formModalReducer,
    contactFormType: FormTypeReducer,
    contactFormObj: contactFormReducer,
    editContactId: editContactIdReducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

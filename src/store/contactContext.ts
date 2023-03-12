import { Icontact, PageProps } from "../types/types";
import { createContext, useReducer } from "react";
import { inputObject } from "../constants/objectConstant";
import { inputFieldReducer } from "../reducers/inputFieldReducer";

// export const AppContext = createContext<Icontact | null>(null);

// const AppDataProvider = ({ children }: PageProps) => {
//   const [state, inputFieldDispatch] = useReducer(inputFieldReducer, inputObject);
//   const value = { state, dispatch };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

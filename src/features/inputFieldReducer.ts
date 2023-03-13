import { Icontact, IActionType, INPUT_FIELD_TYPES } from "../types/types";

export const inputFieldReducer = (
  state: Icontact,
  action: IActionType
): Icontact => {
  switch (action.type) {
    case INPUT_FIELD_TYPES["First Name"]:
      return {
        ...state,
        "First Name": action.payload,
      };

    case INPUT_FIELD_TYPES["Last Name"]:
      return {
        ...state,
        "Last Name": action.payload,
      };

    case INPUT_FIELD_TYPES.Country:
      return {
        ...state,
        Country: action.payload,
      };

    case INPUT_FIELD_TYPES.Phone:
      return {
        ...state,
        Phone: action.payload,
      };

    case INPUT_FIELD_TYPES.Email:
      return {
        ...state,
        Email: action.payload,
      };

    case INPUT_FIELD_TYPES.City:
      return {
        ...state,
        City: action.payload,
      };

    default:
      return state;
  }
};

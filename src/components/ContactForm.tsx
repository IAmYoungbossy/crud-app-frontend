import { useState } from "react";
import { IHandkeChange } from "../types/types";
import { inputObject } from "../constants/objectConstant";
import { getInputFieldNames } from "../constants/textConstants";

type inputFieldType =
  | "City"
  | "Last Name"
  | "First Name"
  | "Country"
  | "Email"
  | "Phone";

export default function ContactForm() {
  const [inputFieldObj, setInputFieldObj] = useState(inputObject);

  const handleChange = ({ inputField, e }: IHandkeChange) => {
    const inputFieldCopy = { ...inputFieldObj, [inputField]: e.target.value };
    console.log(inputFieldCopy);
    setInputFieldObj(inputFieldCopy);
  };

  const { inputFieldNames } = getInputFieldNames();
  return (
    <form>
      {inputFieldNames.map((inputField, index) => {
        const value = inputField as inputFieldType;
        return (
          <div key={index}>
            <label htmlFor={inputField}>{inputField}:</label>
            <input
              type="text"
              id={inputField}
              name={inputField}
              placeholder={inputField}
              value={inputFieldObj[value]}
              onChange={(e) => handleChange({ inputField, e })}
            />
          </div>
        );
      })}
      <button>Add Contact</button>
    </form>
  );
}

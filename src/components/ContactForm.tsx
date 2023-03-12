import { getInputFieldNames } from "../constants/textConstants";

export default function ContactForm() {
  const { inputFieldNames } = getInputFieldNames();
  return (
    <form>
      {inputFieldNames.map((inputField, index) => (
        <div key={index}>
          <label htmlFor={inputField}>{inputField}:</label>
          <input
            type="text"
            id={inputField}
            name={inputField}
            placeholder={inputField}
          />
        </div>
      ))}
      <button>Add Contact</button>
    </form>
  );
}

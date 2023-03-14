import styled from "styled-components";

export const StyledContactForm = styled.form`
  width: 100%;
  margin: auto;
  max-width: 350px;
  border-radius: 0.4rem;
  padding: 2rem 3rem 3rem;
  background-color: white;

  p {
    color: #505050;
    margin-bottom: 1.5rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  button {
    color: #fff;
    border: none;
    width: inherit;
    padding: 0.5rem;
    font-weight: 800;
    margin-top: 1.5rem;
    border-radius: 0.4rem;
    background-color: rgb(56, 145, 15);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  input {
    outline: none;
    padding: 0.5rem;
    border-radius: 0.2rem;
    border: 1px solid #d8d8d8;
  }

  label {
    font-weight: 700;
    margin-bottom: 5px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  & > div {
    display: flex;
    text-align: left;
    margin-top: 10px;
    flex-direction: column;
  }
`;

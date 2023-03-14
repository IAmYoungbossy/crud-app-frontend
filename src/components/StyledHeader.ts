import styled from "styled-components";

export const StyledHeader = styled.header`
  z-index: 2;
  display: flex;
  padding: 5px 30px;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #fffbfb;
  box-shadow: 0px 3px 3px #abb0b6;

  & > div {
    width: 100%;
    display: flex;
    max-width: 900px;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 2rem;
      color: rgb(43, 43, 119);
    }
  }

  img {
    width: 100px;
  }

  button {
    height: 27px;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    font-weight: bold;
    padding: 5px 10px;
    width: max-content;
    border-radius: 10px;
    background-color: #38910f;
  }
`;

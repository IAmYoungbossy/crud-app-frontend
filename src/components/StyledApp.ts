import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  min-height: 100vh;
  position: relative;
  flex-direction: column;

  & > div {
    h2 {
      color: #156d3b;
      text-align: center;
      margin: 10px 0 15px;
    }

    flex: 1;
    padding: 10px;
    background-color: #f0eef1;
  }
`;

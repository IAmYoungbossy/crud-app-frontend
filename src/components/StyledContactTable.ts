import styled from "styled-components";

export const StyledTableContainer = styled.div`
  width: 100%;
  margin: auto;
  max-width: 900px;
  font-family: sans-serif;
`;

export const StyledContactTable = styled.table`
  width: 100%;
  border-spacing: 0;
  font-size: 0.95rem;
  border: 1px solid #ddd;
  border-collapse: collapse;
  background-color: rgb(94 72 109 / 23%);
  font-family: Arial, Helvetica, sans-serif;

  th,
  td {
    text-align: left;
    padding: 25px 10px;
  }

  th {
    color: #fff;
    background-color: #38910f;
  }

  tr:nth-child(even) {
    background-color: #596d482e;
  }

  tr > td:last-child {
    position: relative;
  }

  tr > td:last-child > div {
    top: 6px;
    gap: 8px;
    left: 0px;
    right: 1px;
    width: 100%;
    display: flex;
    padding-left: 10px;
    position: absolute;

    button {
      border: none;
      cursor: pointer;
      padding: 1px 6px;
      border-radius: 5px;
      outline: 1px solid;
      background-color: transparent;
    }

    & > button:first-child {
      outline-color: red;

      &:hover {
        outline: #ff000085;
        color: rgb(255, 255, 255);
        background-color: #ff000085;
      }
    }

    & > button:last-child {
      outline-color: blue;

      &:hover {
        outline: #6767d3;
        color: rgb(255, 255, 255);
        background-color: #6767d3;
      }
    }
  }
`;

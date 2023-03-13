import React from "react";
import App from "./components/App";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./reduxStore/store";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

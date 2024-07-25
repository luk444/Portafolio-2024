import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./components/themeContext";
import reportWebVitals from "./reportWebVitals";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import global_en from './translations/en/global.json'
import global_es from './translations/es/global.json'

i18next.init({
  interpolation:{escapeValue:false},
  lng:'es',
  resources: {
    en: {
      global: global_en
    },
    es:{
      global: global_es
    }
  }
})


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

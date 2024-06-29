import ReactDOM from "react-dom/client";
import "./app/layout/index.css";
import { StoreContext, store } from "./app/stores/store.js";
import App from "./app/layout/App.jsx";
import { initializeLocalStorage } from "./app/api/config/helper.js";
import global_en from "./translations/en/global.json";
import global_kh from "./translations/kh/global.json";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";

i18n.init({
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    kh: {
      global: global_kh,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

initializeLocalStorage();
ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreContext.Provider value={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StoreContext.Provider>
);

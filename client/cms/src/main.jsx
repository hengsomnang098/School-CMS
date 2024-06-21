import ReactDOM from "react-dom/client";
import "./app/layout/index.css";
import { StoreContext, store } from "./app/stores/store.js";
import App from "./app/layout/App.jsx";
import { initializeLocalStorage } from "./app/api/config/helper.js";

initializeLocalStorage();
ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);

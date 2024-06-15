import ReactDOM from "react-dom/client";
import "./app/layout/index.css";
import "react-quill/dist/quill.snow.css";
import { StoreContext, store } from "./app/stores/store.js";
import App from "./app/layout/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);

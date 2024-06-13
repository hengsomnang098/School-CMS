import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-quill/dist/quill.snow.css";
import { StoreContext, store } from "./app/stores/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);

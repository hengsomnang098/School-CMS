import { createContext, useContext } from "react";
import CategoryStore from "./categoryStore";

export const store = {
  categoryStore: new CategoryStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}

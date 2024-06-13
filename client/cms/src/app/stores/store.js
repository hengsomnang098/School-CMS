import { createContext, useContext } from "react";
import CategoryStore from "./categoryStore";
import SlideStore from "./slideStore";

export const store = {
  categoryStore: new CategoryStore(),
  slideStore: new SlideStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
